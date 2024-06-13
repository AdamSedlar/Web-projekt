<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "web_project";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM news";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Title: " . $row["title"]. " - Short Content: " . $row["short_content"]. " - Category: " . $row["category"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
