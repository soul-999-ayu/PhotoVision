import os
import shutil

# Get the list of all .png files in the current directory
png_files = [f for f in os.listdir('.') if f.endswith('.png')]

for file in png_files:
    folder_name = os.path.splitext(file)[0]  # Get the name without extension, e.g., 'z1'
    new_file_name = 'main.png'               # New file name inside the folder

    # Create a new folder with the same name if it doesn't exist
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)
    
    # Move and rename the file
    shutil.move(file, os.path.join(folder_name, new_file_name))

print("All files have been organized!")
