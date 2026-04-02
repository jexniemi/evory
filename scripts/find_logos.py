#!/usr/bin/env python3
import urllib.request
import urllib.parse
import json
import time

HEADERS = {"User-Agent": "Ewory-QuizBot/1.0 (quiz-images)"}

def search_commons(term):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode({
        "action": "query", "list": "search",
        "srsearch": term, "srnamespace": "6",
        "srlimit": "5", "format": "json"
    })
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as r:
        data = json.loads(r.read())
    results = data.get("query", {}).get("search", [])
    return [r["title"] for r in results]

def get_url_for_file(title):
    # title is like "File:BMW.svg"
    fname = title.replace("File:", "").replace(" ", "_")
    # Compute MD5-based path
    import hashlib
    md5 = hashlib.md5(fname.encode("utf-8")).hexdigest()
    return f"https://upload.wikimedia.org/wikipedia/commons/{md5[0]}/{md5[:2]}/{urllib.parse.quote(fname)}"

searches = [
    ("mercedes_simple", "Mercedes-Benz logo star icon simple"),
    ("chevrolet",       "Chevrolet bowtie logo"),
    ("nissan",          "Nissan logo 2020"),
    ("hyundai",         "Hyundai H logo"),
    ("kia",             "Kia logo 2021"),
    ("volvo",           "Volvo cars logo"),
    ("peugeot",         "Peugeot logo 2021"),
    ("mazda",           "Mazda logo vector"),
    ("subaru",          "Subaru logo"),
    ("porsche",         "Porsche logo crest"),
    ("ferrari",         "Ferrari prancing horse logo"),
    ("lamborghini",     "Lamborghini logo"),
]

for key, q in searches:
    results = search_commons(q)
    # Filter to SVG only
    svgs = [r for r in results if r.lower().endswith(".svg")]
    print(f"{key}: {svgs[:3]}")
    time.sleep(0.4)
