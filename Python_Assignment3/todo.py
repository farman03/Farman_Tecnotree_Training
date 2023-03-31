# Import the tkinter library
import tkinter as tk

# Create a function to add an item to the list
def add_item():
    # Get the input from the user
    item = entry.get()
    # Add the item to the list
    if item:
        listbox.insert(tk.END, item)
    # Clear the input field
    entry.delete(0, tk.END)

# Create a function to delete a selected item from the list
def delete_item():
    # Get the selected item from the list
    selected_item = listbox.curselection()
    # Delete the selected item from the list
    if selected_item:
        listbox.delete(selected_item)

# Create the main window
root = tk.Tk()
root.title("To-Do List")

# Create the input field
entry = tk.Entry(root, width=40)
entry.pack(padx=10, pady=10)

# Create the "Add" button
add_button = tk.Button(root, text="Add", command=add_item)
add_button.pack(padx=10, pady=5)

# Create the "Delete" button
delete_button = tk.Button(root, text="Delete", command=delete_item)
delete_button.pack(padx=10, pady=5)

# Create the listbox to display the items
listbox = tk.Listbox(root, width=40)
listbox.pack(padx=10, pady=10)

# Start the main loop
root.mainloop()
