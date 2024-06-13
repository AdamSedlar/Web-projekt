<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST['title'];
    $about = $_POST['about'];
    $content = $_POST['content'];
    $category = $_POST['category'];
    $archive = isset($_POST['archive']) ? "Yes" : "No";
    $image = $_FILES['pphoto']['name'];
    
    move_uploaded_file($_FILES['pphoto']['tmp_name'], "img/" . $image);
    
    echo "<section role='main'>";
    echo "<div class='row'>";
    echo "<p class='category'>$category</p>";
    echo "<h1 class='title'>$title</h1>";
    echo "<p>AUTOR:</p>";
    echo "<p>OBJAVLJENO:</p>";
    echo "</div>";
    echo "<section class='slika'>";
    echo "<img src='img/$image' alt='Image'>";
    echo "</section>";
    echo "<section class='about'><p>$about</p></section>";
    echo "<section class='sadrzaj'><p>$content</p></section>";
    echo "</section>";
}
?>
