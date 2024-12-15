Website Name : BookClub
<br>
Live link : <a href="https://parsimonious-beam.surge.sh/">Visit site</a> 

### **Interactivity Functionality List**

- **Navbar:**
  - Active route highlighting for dynamic navigation.

- **Banner Button:**
  - *View the List* button redirects to the *Listed Books* page.

- **Book Cards:**
  - Clicking on a book card redirects to the dynamic *Book Details* page where we have spinners for loading time then the book details.

- **Read and Wishlist Buttons:**
  - Adds books to *Read* or *Wishlist* lists in local storage.
  - Toast/sweet alerts:
    - First click: Confirms addition to the list.
    - Subsequent click: Alerts that the book is already added.
  - Prevents adding the book to wishlist if already in read list:
    - Shows an alert if attempted.

- **Listed Books Page:**
  - Tab navigation to switch between *Read* and *Wishlist* book lists.
  - Drop-down for sorting books by rating, total pages, or publishing year in descending order.
  - *View Details* button redirects to the corresponding book's *Book Details* page.

- **Pages to Read:**
  - Custom shape bar chart dynamically displays *Read* list books' total pages against their names.

- **404 Page:**
  - User-friendly navigation upon accessing invalid routes. 

These functionalities provide a smooth, interactive experience for users.
