#!/usr/bin/env python3
"""Download quiz images from Wikimedia Commons."""
import os
import urllib.request
import urllib.error
import time
import random

BASE = "/Users/jeremi/projects/embeden/public/quiz"

HEADERS = {
    "User-Agent": "Ewory-QuizBot/1.0 (https://ewory.com; quiz-images) Python/3.x",
    "Accept": "image/svg+xml,image/jpeg,image/*;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Connection": "keep-alive",
}

def download(url, path, retry=3):
    for attempt in range(retry):
        try:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = resp.read()
            with open(path, "wb") as f:
                f.write(data)
            size = len(data)
            print(f"  ✓ {os.path.basename(path)} ({size//1024}KB)")
            return True
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = 3 + attempt * 3 + random.uniform(0, 2)
                print(f"  ~ {os.path.basename(path)}: rate limited, waiting {wait:.1f}s...")
                time.sleep(wait)
            else:
                print(f"  ✗ {os.path.basename(path)}: HTTP {e.code}")
                return False
        except Exception as e:
            print(f"  ✗ {os.path.basename(path)}: {e}")
            return False
    print(f"  ✗ {os.path.basename(path)}: exhausted retries")
    return False

def try_urls(name, urls, path):
    # Skip if already downloaded
    if os.path.exists(path) and os.path.getsize(path) > 100:
        print(f"  ⏭  {os.path.basename(path)} (exists)")
        return True
    for url in urls:
        if download(url, path):
            time.sleep(1.2 + random.uniform(0, 0.8))  # polite delay
            return True
    print(f"  ✗✗ {name}: ALL URLs failed")
    return False

# ===========================================================================
# CAR LOGOS (SVG from Wikimedia)
# ===========================================================================
print("\n=== Downloading Car Logos ===")
car_logos = [
    ("bmw",         [
        "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg",
    ]),
    ("mercedes",    [
        "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c9/Mercedes_Benz_Logo_11.svg",
    ]),
    ("toyota",      [
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/Toyota_2019_logo.svg",
    ]),
    ("honda",       [
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/38/Honda.svg",
    ]),
    ("ford",        [
        "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg",
    ]),
    ("volkswagen",  [
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Volkswagen_logo_2019.svg",
    ]),
    ("audi",        [
        "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/2016-Audi_logo.svg",
    ]),
    ("porsche",     [
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Porsche_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/47/Porsche_Wappen_frei.svg",
    ]),
    ("ferrari",     [
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/Ferrari_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/af/Ferrari_logo.svg",
    ]),
    ("lamborghini", [
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Lamborghini_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Lamborghini-logo.svg",
    ]),
    ("tesla",       [
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Tesla_Motors_Logo.svg",
    ]),
    ("chevrolet",   [
        "https://upload.wikimedia.org/wikipedia/commons/e/e6/Chevrolet_bowtie_%282013%29.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a1/Chevrolet_Logo.svg",
    ]),
    ("nissan",      [
        "https://upload.wikimedia.org/wikipedia/commons/8/8b/Nissan_new_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Nissan-logo.svg",
    ]),
    ("hyundai",     [
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Hyundai_Motor_Company_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d2/Hyundai_logo.svg",
    ]),
    ("kia",         [
        "https://upload.wikimedia.org/wikipedia/commons/1/13/Kia-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/1c/Kia_logo3.svg",
    ]),
    ("volvo",       [
        "https://upload.wikimedia.org/wikipedia/commons/2/23/Volvo_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/7/72/Volvo_Cars_logo.svg",
    ]),
    ("peugeot",     [
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Peugeot_2021_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/47/Peugeot_Logo.svg",
    ]),
    ("renault",     [
        "https://upload.wikimedia.org/wikipedia/commons/b/b7/Renault_2021_Text.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/Renault_2009_logo.svg",
    ]),
    ("mazda",       [
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Mazda_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/37/Mazda_Logo.svg",
    ]),
    ("subaru",      [
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/Subaru_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/30/Subaru_logo.svg",
    ]),
]

for name, urls in car_logos:
    try_urls(name, urls, f"{BASE}/car-logos/{name}.svg")

# ===========================================================================
# PLANETS (JPG from Wikimedia)
# ===========================================================================
print("\n=== Downloading Planets ===")
planets = [
    ("mercury", [
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/600px-Mercury_in_true_color.jpg",
    ]),
    ("venus", [
        "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/600px-Venus-real_color.jpg",
    ]),
    ("earth", [
        "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/600px-The_Earth_seen_from_Apollo_17.jpg",
    ]),
    ("mars", [
        "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/600px-OSIRIS_Mars_true_color.jpg",
    ]),
    ("jupiter", [
        "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/600px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    ]),
    ("saturn", [
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/600px-Saturn_during_Equinox.jpg",
    ]),
    ("uranus", [
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/600px-Uranus2.jpg",
    ]),
    ("neptune", [
        "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/600px-Neptune_Full.jpg",
    ]),
    ("moon", [
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/600px-FullMoon2010.jpg",
    ]),
    ("pluto", [
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/600px-Pluto_in_True_Color_-_High-Res.jpg",
    ]),
    ("sun", [
        "https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/600px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
    ]),
    ("europa", [
        "https://upload.wikimedia.org/wikipedia/commons/5/54/Europa-moon.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Europa-moon.jpg/600px-Europa-moon.jpg",
    ]),
    ("titan", [
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Titan_in_true_color.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Titan_in_true_color.jpg/600px-Titan_in_true_color.jpg",
    ]),
    ("io", [
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Io_highest_resolution_true_color.jpg/600px-Io_highest_resolution_true_color.jpg",
    ]),
]

for name, urls in planets:
    try_urls(name, urls, f"{BASE}/planets/{name}.jpg")

# ===========================================================================
# FAMOUS PAINTINGS (JPG from Wikimedia)
# ===========================================================================
print("\n=== Downloading Famous Paintings ===")
paintings = [
    ("mona_lisa", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    ]),
    ("starry_night", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    ]),
    ("girl_with_pearl_earring", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
    ]),
    ("birth_of_venus", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/800px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/26/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    ]),
    ("last_supper", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/800px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
    ]),
    ("sunflowers", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/800px-Vincent_Willem_van_Gogh_127.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/46/Vincent_Willem_van_Gogh_127.jpg",
    ]),
    ("the_scream", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/600px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    ]),
    ("great_wave", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/800px-Tsunami_by_hokusai_19th_century.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tsunami_by_hokusai_19th_century.jpg",
    ]),
    ("night_watch", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/800px-The_Night_Watch_-_HD.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/The_Night_Watch_-_HD.jpg",
    ]),
    ("las_meninas", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/800px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
    ]),
    ("water_lilies", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/800px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    ]),
    ("van_gogh_self_portrait", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg",
    ]),
    ("whistlers_mother", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Whistler%27s_Mother%2C_by_James_McNeill_Whistler%2C_from_C2RMF_retouched.jpg/800px-Whistler%27s_Mother%2C_by_James_McNeill_Whistler%2C_from_C2RMF_retouched.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Whistler%27s_Mother%2C_by_James_McNeill_Whistler%2C_from_C2RMF_retouched.jpg",
    ]),
    ("liberty_leading", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/800px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg",
    ]),
    ("napoleon_crossing", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg/800px-David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg",
    ]),
    ("american_gothic", [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_DeVolson_Wood_-_American_Gothic.jpg/800px-Grant_DeVolson_Wood_-_American_Gothic.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_DeVolson_Wood_-_American_Gothic.jpg",
    ]),
]

for name, urls in paintings:
    try_urls(name, urls, f"{BASE}/famous-paintings/{name}.jpg")

# ===========================================================================
# Summary
# ===========================================================================
print("\n=== Summary ===")
for folder in ["car-logos", "planets", "famous-paintings"]:
    d = f"{BASE}/{folder}"
    if os.path.isdir(d):
        files = os.listdir(d)
        print(f"  {folder}: {len(files)} files")
    else:
        print(f"  {folder}: directory not created")
