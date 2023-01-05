<?php require_once "utils.php"; ?>

<!-- NOTE event bez prokliku
{
    "label": "BUDĚJOVICKÝ MAJÁLES",
    "shortDesc": "Lorem ipsum",
    "thumbnail": "vids/0.png",
    "backgroundColor": "000000",
    "textColor": "FFFFFF"
}, -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <link href="style/general.css" rel="stylesheet">
    <link href="style/header.css" rel="stylesheet">
    <link href="style/card.css" rel="stylesheet">
    <title>EVENTS</title>
</head>

<body>
    <div class="header-wrapper">
        <div class="header-overlay">
            <div class="overlay-navbar d-flex flex-row align-items-center m-4">
                <a href="index.html">
                    <div id="logo"></div>
                </a>
                <div class="container-fluid"></div>
                <a href="videos.php" class="px-1 px-md-3">VIDEOS</a>
                <a href="events.php" class="px-1 px-md-3">EVENTS</a>
                <a href="contact.html" class="px-1 px-md-3">CONTACT</a>
            </div>
            <div class="overlay-content d-flex align-items-center">
                <div class="text-center w-100">
                    <h1 class="display-1">EVENTS</h1>
                    <p class="lead">asdlkansdkln</p>
                </div>
            </div>
        </div>
    </div>
    <div class="content-wrapper content-wrapper-first">
        <div class="row">
            <?php
            $json = json_decode(file_get_contents("content.json"), true);
            foreach ($json["events"] as $category) {
                echo '<div class="text-center py-5 mt-5">
            <h2 class="display-4 text-uppercase">' . $category["label"] . '</h2>
                    <p class="lead mx-3">' . $category["desc"] . '</p>
                </div>
                <div class="row">';
                $projectsCount = count($category["projects"]);
                $i = 0;
                foreach ($category["projects"] as $project) {
                    buildCard(
                        "",
                        $project["label"],
                        $project["shortDesc"],
                        $project["thumbnail"],
                        $project["textColor"],
                        $project["backgroundColor"],
                        $project["detailGalleryPath"] ?? "",
                        $project["detailLongDesc"] ?? "",
                        ++$i === $projectsCount && ($i % 2 != 0)
                    );
                }
                echo "</div>";
            }
            ?>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="scripts/redirectPost.js"></script>
    <script>
        $(document).ready(function() {
            $(".card-background").click(function() {
                var longDesc = $(this).data("longDesc");
                var galPath = $(this).data("galPath");
                if (galPath != "" && longDesc != "") {
                    $.redirectPost("detail.php", {
                        thumbnail: $(this).data("thumbnail"),
                        label: $(this).data("label"),
                        desc: $(this).data("desc"),
                        longDesc: longDesc,
                        galPath: galPath
                    });
                }
            });

            $("#videoPlayer").on('hide.bs.modal', function(e) {
                $("#playerIframe").attr("src", "");
            });
        });
    </script>

</body>

</html>