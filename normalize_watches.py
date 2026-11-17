import os
from PIL import Image

output_dir = 'public/watches/normalized'
os.makedirs(output_dir, exist_ok=True)

# Canvas dimensions
CANVAS_W = 400
CANVAS_H = 560
TARGET_DIAL_Y = 250  # Center of dial
TARGET_DIAL_SIZE = 220  # Approximate width of the watch case/bezel

watch_files = [f'public/watches/watch-{i}.png' for i in range(1, 9)]

for idx, fpath in enumerate(watch_files, 1):
    if not os.path.exists(fpath):
        continue
    im = Image.open(fpath).convert('RGBA')
    bbox = im.getbbox()
    if not bbox:
        continue
    
    # Crop to non-transparent content
    cropped = im.crop(bbox)
    cw, ch = cropped.size
    
    # Scale so that the case width is proportionally consistent
    # Most watches: case is approximately 85% of cropped width
    scale = TARGET_DIAL_SIZE / (cw * 0.85)
    new_w = int(cw * scale)
    new_h = int(ch * scale)
    
    # If the scaled height exceeds the canvas, fit by height
    if new_h > CANVAS_H - 80:
        scale_h = (CANVAS_H - 80) / new_h
        new_w = int(new_w * scale_h)
        new_h = int(new_h * scale_h)
        
    resized = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Create final transparent canvas
    canvas = Image.new('RGBA', (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    pos_x = (CANVAS_W - new_w) // 2
    pos_y = (CANVAS_H - new_h) // 2 - 15  # Slightly elevated
    
    canvas.paste(resized, (pos_x, pos_y), resized)
    
    out_path = os.path.join(output_dir, f'watch-{idx}.png')
    canvas.save(out_path, 'PNG', optimize=True)
    print(f"Saved {out_path}: {canvas.size}, cropped was {cw}x{ch} -> {new_w}x{new_h}")

print("All normalized watches saved successfully.")
