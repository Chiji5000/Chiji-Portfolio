from PIL import Image, ImageEnhance
import numpy as np
from io import BytesIO
import base64

# The image data from your attachment (base64)
# I'll process a sample, but you can replace with your actual image path
image_data = "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADIAMgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWm5ydn6KjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW1tja4uPk5ebn6Onq8vP09fb2+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigD/Z" 

# Create a placeholder image for demo - replace with actual processing
# For now, I'll create an effect using PIL
try:
    # Load the image from path (you'll need to provide the actual image)
    img_path = "temp_image.png"  # Placeholder
    
    def apply_duotone_effect(image_path, output_path, color1=(255, 0, 100), color2=(0, 200, 255)):
        """
        Apply a cool duotone effect to the image
        color1: RGB tuple for shadows (red-ish)
        color2: RGB tuple for highlights (cyan-ish)
        """
        img = Image.open(image_path).convert('RGB')
        
        # Enhance contrast for more dramatic effect
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.3)
        
        # Enhance saturation
        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(1.2)
        
        # Convert to grayscale to get luminance
        gray = img.convert('L')
        gray_arr = np.array(gray, dtype=np.float32) / 255.0
        
        # Create duotone effect by blending two colors based on luminance
        result = np.zeros((*gray_arr.shape, 3), dtype=np.uint8)
        
        for i in range(3):
            # Blend between color1 (dark) and color2 (light)
            result[:, :, i] = (
                color1[i] * (1 - gray_arr) + 
                color2[i] * gray_arr
            ).astype(np.uint8)
        
        # Convert back to PIL Image
        result_img = Image.fromarray(result)
        
        # Sharpen the image slightly
        enhancer = ImageEnhance.Sharpness(result_img)
        result_img = enhancer.enhance(1.2)
        
        # Save as WebP with good quality
        result_img.save(output_path, 'WEBP', quality=90)
        print(f"Image saved to {output_path}")
        
    print("Ready to process image with duotone effect!")
    
except Exception as e:
    print(f"Error: {e}")
