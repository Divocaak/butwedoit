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
    <link href="style/events.css" rel="stylesheet">
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
                    <p class="lead">Hybrid events, Full production service</p>
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
                        <p class="lead px-5">' . $category["desc"] . '</p>
                    </div>';

                $projectsCount = count($category["projects"]);
                $i = 0;
                foreach ($category["projects"] as $project) {
                    $img = '<div class="col-12 col-md-6 thumbnail p-0 m-0" style="background-image: url(\'imgs/thumbnails/' . $project["thumbnail"] . '\');"></div>';

                    echo '<div class="row projectHolder p-0 m-0 d-none d-md-flex">';
                    if ($i % 2 == 0)
                        echo $img;

                    echo '<div class="col-12 col-md-6 d-flex align-items-center" style="background-color: #' . $project["backgroundColor"] . '; color: #' . $project["textColor"] . '">
                        <div class="text-center w-100 px-3 px-md-5">
                            <h2>' . $project["label"] . '</h2>
                            <p class="lead">' . $project["shortDesc"] . '</p>
                            <p data-label="' . $project["label"] . '" 
                                data-desc="' . $project["shortDesc"] . '"
                                data-gal-path="' . $project["detailGalleryPath"] . '",
                                data-long-desc="' . $project["detailLongDesc"] . '",
                                data-thumbnail="' . $project["thumbnail"] . '"
                                class="detailBtn">MORE</p>
                        </div>
                    </div>';

                    if ($i % 2 > 0)
                        echo $img;

                    echo '</div>';

                    echo '<div class="p-0 d-block d-md-none">
                            <div class="thumbnail thumbnailBtn" style="background-image: url(\'imgs/thumbnails/' . $project["thumbnail"] . '\');"
                                data-label="' . $project["label"] . '" 
                                data-desc="' . $project["shortDesc"] . '"
                                data-gal-path="' . $project["detailGalleryPath"] . '",
                                data-long-desc="' . $project["detailLongDesc"] . '",
                                data-thumbnail="' . $project["thumbnail"] . '">
                                <div class="card-content-holder-small pt-2 ps-3">
                                    <h2><span class="p-2" style="background-color: #' . $project["backgroundColor"] . '; color: #' . $project["textColor"] . '">' . $project["label"] . '</span></h2>
                                    <p class="lead"><span class="p-2" style="background-color: #' . $project["backgroundColor"] . '; color: #' . $project["textColor"] . '">' . $project["shortDesc"] . '</span></p>
                                </div>
                            </div>
                        </div>';
                    
                    $i++;
                }
            }
            ?>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="scripts/redirectPost.js"></script>
    <script>
        $(document).ready(function() {
            $(".detailBtn,.thumbnailBtn").click(function() {
                $.redirectPost("detail.php", {
                    thumbnail: $(this).data("thumbnail"),
                    label: $(this).data("label"),
                    desc: $(this).data("desc"),
                    longDesc: $(this).data("longDesc"),
                    galPath: $(this).data("galPath")
                });
            });
        });
    </script>

</body>

</html>