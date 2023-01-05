<?php require_once "utils.php"; ?>

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
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <link href="style/reelCard.css" rel="stylesheet">
    <title>VIDEO</title>
</head>

<body>
    <div class="header-wrapper">
        <video autoplay muted loop id="myVideo">
            <source src="reel.mp4" type="video/mp4">
        </video>
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
                    <h1 class="display-1">VIDEOS</h1>
                    <p class="lead">Check out <a href="#reelCarousel"><u>Reels (Shorts)</u></a> too</p>
                </div>
            </div>
        </div>
    </div>
    <div class="content-wrapper content-wrapper-first">
        <div class="row">
            <?php
            $json = json_decode(file_get_contents("content.json"), true);
            $videosCount = count($json["videos"]);
            $i = 0;
            foreach ($json["videos"] as $video) {
                buildCard(
                    $video["youtube"] ?? "",
                    $video["label"],
                    $video["shortDesc"],
                    $video["thumbnail"],
                    $video["textColor"],
                    $video["backgroundColor"],
                    $video["detailGalleryPath"] ?? "",
                    $video["detailLongDesc"] ?? "",
                    ++$i === $videosCount && ($i % 2 != 0)
                );
            }
            ?>
        </div>
    </div>
    <div class="content-wrapper">
        <div id="reelCarousel">
            <?php
            foreach ($json["reels"] as $reel) {
                echo '<div class="reel-card">
                        <div class="card-background' . (!isset($reel["youtube"]) ? " card-cursor-default" : "") . '" 
                            style="' . (isset($reel["thumbnail"]) ? 'background-image: url(\'imgs/thumbnails/' . $reel["thumbnail"] . '\'); ' : '') . 'color: #' . $reel["textColor"] . '" 
                            loading="lazy" 
                            ' . (isset($reel["youtube"]) ? ("data-youtube-id='" . $reel["youtube"] . "'") : "") . ' 
                            data-label="' . $reel["label"] . '" 
                            data-desc="' . $reel["shortDesc"] . '">
                                <div class="' . (isset($reel["youtube"]) ? "card-content-holder" : "text-reel-content-holder") . ' d-none d-md-flex align-items-center" style="background-color: #' . $reel["backgroundColor"] . '">
                                    <div class="text-center w-100">
                                        <h2>' . $reel["label"] . '</h2>
                                        <p class="lead">' . $reel["shortDesc"] . '</p>
                                    </div>
                                </div>'
                    . (isset($reel["youtube"]) ?
                        '<div class="card-content-holder-small d-block d-md-none pt-2">
                                        <h2><span class="p-2 ms-2" style="background-color: #' . $reel["backgroundColor"] . '">' . $reel["label"] . '</span></h2>
                                        <p class="lead"><span class="p-2 ms-2" style="background-color: #' . $reel["backgroundColor"] . '">' . $reel["shortDesc"] . '</span></p>
                                    </div>' :
                        '<div class="text-reel-content-holder d-flex d-md-none align-items-center pt-2">
                                        <div class="text-center w-100">
                                            <h2><span class="p-2 ms-2" style="background-color: #' . $reel["backgroundColor"] . '">' . $reel["label"] . '</span></h2>
                                            <p class="lead"><span class="p-2 ms-2" style="background-color: #' . $reel["backgroundColor"] . '">' . $reel["shortDesc"] . '</span></p>
                                        </div>
                                    </div>') .
                    '</div>
                    </div>';
            }
            ?>
        </div>
    </div>
    <div class="modal fade" id="videoPlayer" tabindex="-1" aria-labelledby="videoPlayerLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content modal-video-wrapper text-center">
                <h2 class="display-1"><span id="modalLabel"></span><a data-bs-dismiss="modal" class="btn text-light btn-bigger"><i class="bi bi-x-circle ps-2"></i></a></h2>
                <div class="ratio ratio-16x9">
                    <iframe id="playerIframe" src="" allowfullscreen allow="autoplay"></iframe>
                </div>
                <p class="lead pt-3" id="modalDesc"></p>
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="scripts/redirectPost.js"></script>
    <script>
        $(document).ready(function() {
            $('#reelCarousel').slick({
                arrows: false,
                centerMode: true,
                centerPadding: '5vh',
                slidesToShow: 3,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '1vh',
                        slidesToShow: 1
                    }
                }]
            });

            $(".card-background").on('mousedown', function(e) {
                $(this).data('p0', {
                    x: e.pageX,
                    y: e.pageY
                });
            }).on('mouseup', function(e) {
                var p0 = $(this).data('p0'),
                    p1 = {
                        x: e.pageX,
                        y: e.pageY
                    },
                    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

                if (d < 4) {
                    var yt = $(this).data("youtubeId");
                    var label = $(this).data("label");
                    var desc = $(this).data("desc");
                    if (yt != null) {
                        if (yt != "") {
                            $("#modalLabel").text(label);
                            $("#modalDesc").text(desc);
                            $("#playerIframe").attr("src", "https://www.youtube.com/embed/" + yt + "?autoplay=1&mute=1&showinfo=0&controls=1&html5=1");

                            $("#videoPlayer").modal("show");
                        } else {
                            $.redirectPost("detail.php", {
                                thumbnail: $(this).data("thumbnail"),
                                label: label,
                                desc: desc,
                                longDesc: $(this).data("longDesc"),
                                galPath: $(this).data("galPath"),
                            });
                        }
                    }
                }
            })

            $("#videoPlayer").on('hide.bs.modal', function(e) {
                $("#playerIframe").attr("src", "");
            });
        });
    </script>

</body>

</html>