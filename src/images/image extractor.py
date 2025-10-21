# from selenium import webdriver
# from selenium.webdriver.edge.service import Service
# from selenium.webdriver.edge.options import Options
# import os
# import requests
# from urllib.parse import urljoin
# import time

# # --- CONFIG ---
# url = "https://www.hsm-leander.com/menu/"
# save_folder = "menu_images"
# driver_path = r"C:\Users\indra\OneDrive\Desktop\Clara Projects\Phishingdetection\backend\webdriver\edgedriver_win64\msedgedriver.exe"  # 👈 update this if your driver is elsewhere

# os.makedirs(save_folder, exist_ok=True)

# options = Options()
# options.add_argument("--headless=new")
# options.add_argument("--disable-gpu")
# options.add_argument("--no-sandbox")
# options.add_argument("--disable-dev-shm-usage")

# # Launch Edge
# service = Service(driver_path)
# driver = webdriver.Edge(service=service, options=options)

# print("🚀 Opening page...")
# driver.get(url)
# time.sleep(4)  # wait for page to fully load JS, adjust if needed

# imgs = driver.find_elements("tag name", "img")
# print(f"🖼 Found {len(imgs)} images")

# for img in imgs:
#     src = img.get_attribute("src")
#     if not src:
#         continue

#     full_url = urljoin(url, src)
#     filename = os.path.join(save_folder, os.path.basename(src.split("?")[0]))

#     try:
#         data = requests.get(full_url, timeout=15).content
#         with open(filename, "wb") as f:
#             f.write(data)
#         print("✅ Saved:", filename)
#     except Exception as e:
#         print("⚠️ Failed:", full_url, "->", e)

# driver.quit()
# print("\n🎉 Done! Images saved to:", save_folder)
from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options
import requests, os, time, base64
from urllib.parse import urljoin

# CONFIG
url = "https://www.hsm-leander.com/menu/"
save_folder = "menu_images"
driver_path = r"C:\Users\indra\OneDrive\Desktop\Clara Projects\Phishingdetection\backend\webdriver\edgedriver_win64\msedgedriver.exe"  # 👈 update this if your driver is elsewhere

os.makedirs(save_folder, exist_ok=True)

# start Edge
options = Options()
options.add_argument("--headless=new")
driver = webdriver.Edge(service=Service(driver_path), options=options)

driver.get(url)
time.sleep(4)

imgs = driver.find_elements("tag name", "img")
print("Found", len(imgs), "images")

# Prepare requests session using browser cookies and headers
session = requests.Session()

# set user-agent from navigator
user_agent = driver.execute_script("return navigator.userAgent;")
session.headers.update({
    "User-Agent": user_agent,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "Referer": url,   # IMPORTANT for anti-hotlinking
    "Accept-Language": "en-US,en;q=0.9",
})

# copy cookies from selenium into requests session
for c in driver.get_cookies():
    session.cookies.set(c['name'], c['value'], domain=c.get('domain'))

for n, img in enumerate(imgs, start=1):
    src = img.get_attribute("src")
    if not src: 
        continue
    full_url = urljoin(url, src)
    filename = os.path.join(save_folder, os.path.basename(src.split("?")[0]))
    try:
        # streaming download and retry
        resp = session.get(full_url, timeout=20, stream=True)
        resp.raise_for_status()
        with open(filename, "wb") as f:
            for chunk in resp.iter_content(1024*8):
                if chunk:
                    f.write(chunk)
        print(f"✅ Saved: {filename}")
    except Exception as e:
        print("⚠️ Failed:", full_url, "->", repr(e))

driver.quit()
print("Done")


# from selenium import webdriver
# from selenium.webdriver.edge.service import Service
# from selenium.webdriver.edge.options import Options
# import os, time, base64
# from urllib.parse import urljoin

# url = "https://www.hsm-leander.com/menu/"
# save_folder = "menu_images"
# driver_path = r"C:\Users\indra\OneDrive\Desktop\Clara Projects\Phishingdetection\backend\webdriver\edgedriver_win64\msedgedriver.exe"  # 👈 update this if your driver is elsewhere

# os.makedirs(save_folder, exist_ok=True)

# options = Options()
# options.add_argument("--headless=new")
# driver = webdriver.Edge(service=Service(driver_path), options=options)

# driver.get(url)
# time.sleep(4)
# imgs = driver.find_elements("tag name", "img")
# print("Found", len(imgs), "images")

# # JS that fetches an image and returns base64 via callback
# js_fetch_to_base64 = """
# const src = arguments[0];
# const callback = arguments[arguments.length - 1];
# fetch(src, { credentials: 'include' }) // include cookies
#   .then(r => {
#     if (!r.ok) throw new Error('HTTP ' + r.status);
#     return r.arrayBuffer();
#   })
#   .then(buf => {
#     let binary = '';
#     const bytes = new Uint8Array(buf);
#     const chunk = 0x8000;
#     for (let i=0; i<bytes.length; i+=chunk) {
#       binary += String.fromCharCode.apply(null, bytes.subarray(i, i+chunk));
#     }
#     const b64 = btoa(binary);
#     callback(b64);
#   })
#   .catch(err => { callback('__ERROR__:' + err.toString()); });
# """

# for img in imgs:
#     src = img.get_attribute("src")
#     if not src:
#         continue
#     filename = os.path.join(save_folder, os.path.basename(src.split("?")[0]))
#     try:
#         b64 = driver.execute_async_script(js_fetch_to_base64, src)
#         if isinstance(b64, str) and b64.startswith("__ERROR__:"):
#             raise Exception(b64)
#         # infer extension from src (fallback to .bin)
#         ext = os.path.splitext(src.split("?")[0])[1] or ".bin"
#         if not filename.lower().endswith(ext.lower()):
#             filename += ext
#         with open(filename, "wb") as f:
#             f.write(base64.b64decode(b64))
#         print("✅ Saved:", filename)
#     except Exception as e:
#         print("⚠️ Failed (browser fetch):", src, "->", repr(e))

# driver.quit()
# print("Done")
