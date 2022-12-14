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
    <title>VIDEO</title>
</head>

<body>
    <div class="header-wrapper">
        <video autoplay muted loop id="myVideo">
            <source src="reel.mp4" type="video/mp4">
        </video>
        <div class="header-overlay d-flex align-items-center">
            <div class="text-center w-100">
                <h1 class="display-1">VIDEA</h1>
                <p class="lead">chgvjbkn</p>
                <a href="index.html" class="btn text-light btn-bigger"><i class="bi bi-arrow-left-circle pe-2"></i></a>
            </div>
        </div>
    </div>
    <div class="content-wrapper">
        <div class="row">
            <?php
            $json = json_decode(file_get_contents("content.json"), true);
            foreach ($json["videos"] as $video) {
                buildCard(
                    $video["youtube"] ?? "",
                    $video["label"],
                    $video["shortDesc"],
                    $video["thumbnail"],
                    $video["textColor"],
                    $video["backgroundColor"],
                    $video["detailGalleryPath"] ?? "",
                    $video["detailLongDesc"] ?? ""
                );
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
    <script src="scripts/redirectPost.js"></script>
    <script>
        $(document).ready(function() {
            $(".card-background").click(function() {
                var yt = $(this).data("youtubeId");
                var label = $(this).data("label");
                var desc = $(this).data("desc");
                if (yt != "") {
                    $("#modalLabel").text(label);
                    $("#modalDesc").text(desc);
                    $("#playerIframe").attr("src", "https://www.youtube.com/embed/" + yt + "?autoplay=1&mute=1&showinfo=0&controls=1&html5=1");

                    $("#videoPlayer").modal("show");
                } else {
                    $.redirectPost("detail.php", {
                        backPath: window.location.pathname,
                        thumbnail: $(this).data("thumbnail"),
                        label: label,
                        desc: desc,
                        longDesc: $(this).data("longDesc"),
                        galPath: $(this).data("galPath"),
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