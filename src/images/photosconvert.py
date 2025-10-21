from PIL import Image
import os

input_folder = r"C:\Users\indra\OneDrive\Desktop\Clara Projects\spicy_matka leander\src\images\menu_images"
output_folder = r"C:\Users\indra\OneDrive\Desktop\Clara Projects\spicy_matka leander\src\images\menu_images\convert"

os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    if filename.endswith(".webp"):
        webp_path = os.path.join(input_folder, filename)
        jpg_path = os.path.join(output_folder, filename.replace(".webp", ".jpg"))

        with Image.open(webp_path) as img:
            rgb_img = img.convert("RGB")  # JPG doesn't support alpha channel
            rgb_img.save(jpg_path, "JPEG", quality=95)

print("✅ Converted all .webp files to real .jpg images.")
