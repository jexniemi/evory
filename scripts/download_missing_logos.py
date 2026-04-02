#!/usr/bin/env python3
"""Download missing car logos using Wikimedia Special:FilePath redirect."""
import os
import urllib.request
import urllib.parse
import time
import random

BASE = "/Users/jeremi/projects/embeden/public/quiz"

HEADERS = {
    "User-Agent": "Ewory-QuizBot/1.0 (https://ewory.com; quiz-images) Python/3.x",
    "Accept": "image/*,*/*;q=0.8",
}

def download_file(filename, path, retry=4):
    """Download via Wikimedia Special:FilePath redirect."""
    if os.path.exists(path) and os.path.getsize(path) > 500:
        print(f"  ⏭  {os.path.basename(path)} (exists)")
        return True

    url = f"https://commons.wikimedia.org/wiki/Special:FilePath/{urllib.parse.quote(filename)}"
    for attempt in range(retry):
        try:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = resp.read()
            with open(path, "wb") as f:
                f.write(data)
            size = len(data)
            print(f"  ✓ {os.path.basename(path)} ({size // 1024}KB)")
            return True
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = 4 + attempt * 5 + random.uniform(0, 2)
                print(f"  ~ {os.path.basename(path)}: rate limited, waiting {wait:.0f}s...")
                time.sleep(wait)
            else:
                print(f"  ✗ {os.path.basename(path)}: HTTP {e.code}")
                return False
        except Exception as e:
            print(f"  ✗ {os.path.basename(path)}: {e}")
            return False
    print(f"  ✗ {os.path.basename(path)}: exhausted retries")
    return False


print("=== Downloading Car Logos (via Special:FilePath) ===")

logos = [
    # (output_name, wikimedia_filename)
    # Already downloaded - keep as-is but replace heavy mercedes
    ("mercedes",    "Mercedes-Benz_Star_2022.svg"),
    ("chevrolet",   "Chevrolet_bowtie_2023.svg"),
    ("nissan",      "Nissan_logo_2001.svg"),
    ("hyundai",     "Hyundai_Motor_Company_logo.svg"),
    ("kia",         "KIA_logo3.svg"),
    ("volvo",       "Volvo_logo.svg"),
    ("mazda",       "Mazda_Wordmark_2024.svg"),
    ("subaru",      "Subaru_logo.svg"),
    ("porsche",     "Porsche_Logotype_Black.svg"),
    ("ferrari",     "Ferrari-Logo.svg"),
    ("lamborghini", "Lamborghini_logo.svg"),
    ("peugeot",     "Peugeot_2021_Logo.svg"),
]

for name, wikiname in logos:
    path = f"{BASE}/car-logos/{name}.svg"
    # Delete old heavy mercedes
    if name == "mercedes" and os.path.exists(path) and os.path.getsize(path) > 500000:
        print(f"  🗑  Deleting heavy mercedes.svg ({os.path.getsize(path)//1024}KB)...")
        os.remove(path)
    download_file(wikiname, path)
    time.sleep(1.0 + random.uniform(0, 0.5))

print("\n=== Final Car Logos ===")
d = f"{BASE}/car-logos"
for f in sorted(os.listdir(d)):
    size = os.path.getsize(f"{d}/{f}")
    print(f"  {f}: {size//1024}KB")
