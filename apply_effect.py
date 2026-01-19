from PIL import Image, ImageEnhance
import numpy as np

# Process the current inspiration image
input_path = 'C:\\Users\\CHIJI\\Desktop\\Chiji-Portfolio\\portfolio\\src\\assets\\Images\\inspiration.webp'
output_path = 'C:\\Users\\CHIJI\\Desktop\\Chiji-Portfolio\\portfolio\\src\\assets\\Images\\inspiration.webp'

try:
    img = Image.open(input_path)
    print(f"Original size: {img.size}")
    
    img = img.convert('RGB')
    
    # Enhance contrast
    contrast = ImageEnhance.Contrast(img)
    img = contrast.enhance(1.5)
    
    # Enhance brightness
    brightness = ImageEnhance.Brightness(img)
    img = brightness.enhance(1.1)
    
    # Enhance sharpness
    sharp = ImageEnhance.Sharpness(img)
    img = sharp.enhance(1.4)
    
    # Convert to grayscale for luminance
    gray = img.convert('L')
    gray_arr = np.array(gray, dtype=np.float32) / 255.0
    
    # Duotone colors (magenta to cyan)
    dark_color = np.array([220, 50, 130], dtype=np.float32)
    light_color = np.array([30, 200, 255], dtype=np.float32)
    
    # Create duotone effect
    result = np.zeros((*gray_arr.shape, 3), dtype=np.uint8)
    for i in range(3):
        result[:, :, i] = (
            dark_color[i] * (1 - gray_arr) + 
            light_color[i] * gray_arr
        ).astype(np.uint8)
    
    result_img = Image.fromarray(result)
    
    # Final sharpness
    sharp = ImageEnhance.Sharpness(result_img)
    result_img = sharp.enhance(1.2)
    
    # Save back to same file
    result_img.save(output_path, 'WEBP', quality=95)
    print(f"✓ Successfully replaced {output_path} with duotone effect!")
    
except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()
