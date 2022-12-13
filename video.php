<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <link href="style/general.css" rel="stylesheet">
    <link href="style/video-header.css" rel="stylesheet">
    <link href="style/card.css" rel="stylesheet">
    <title>VIDEO</title>
</head>

<body>

    <div class="video-wrapper">
        <video autoplay muted loop id="myVideo">
            <source src="reel.mp4" type="video/mp4">
        </video>
        <div class="video-overlay d-flex align-items-center">
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
                echo '<div class="col-12 col-md-6 p-0">
                        <div class="card-background" data-youtube-id="' . $video["youtube"] . '" data-label="' . $video["label"] . '" data-desc="' . $video["shortDesc"] . '" style="background-image: url(\'imgs/thumbnails/' . $video["thumbnail"] . '.png\'); color: #' . $video["textColor"] . '">
                            <div class="card-content-holder d-none d-md-flex align-items-center" style="background-color: #' . $video["backgroundColor"] . '">
                                <div class="text-center w-100">
                                    <h2>' . $video["label"] . '</h2>
                                    <p class="lead">' . $video["shortDesc"] . '</p>
                                </div>
                            </div>
                            <div class="card-content-holder-small d-block d-md-none pt-2">
                                <h2><span class="p-2 ms-2" style="background-color: #' . $video["backgroundColor"] . '">' . $video["label"] . '</span></h2>
                                <p class="lead"><span class="p-2 ms-2" style="background-color: #' . $video["backgroundColor"] . '">' . $video["shortDesc"] . '</span></p>
                            </div>
                        </div>
                    </div>';
            }
            ?>
        </div>
    </div>
    <div class="modal fade" id="videoPlayer" tabindex="-1" aria-labelledby="videoPlayerLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content modal-video-wrapper text-center">
                <h2 class="display-1"><span id="modalLabel"></span><a id="closeModalBtn" class="btn text-light btn-bigger"><i class="bi bi-x-circle ps-2"></i></a></h2>
                <div class="ratio ratio-16x9">
                    <iframe id="playerIframe" src="" allowfullscreen allow="autoplay"></iframe>
                </div>
                <p class="lead pt-3" id="modalDesc"></p>
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $(".card-background").click(function() {
                $("#modalLabel").text($(this).data("label"));
                $("#modalDesc").text($(this).data("desc"));
                $("#playerIframe").attr("src", "https://www.youtube.com/embed/" + $(this).data("youtubeId") + "?autoplay=1&mute=1&showinfo=0&controls=1&html5=1");

                $("#videoPlayer").modal("show");
            });

            $("#closeModalBtn").click(function() {
                $("#videoPlayer").modal("hide");
            });

            $("#videoPlayer").on(' hide.bs.modal', function(e) {
                $("#playerIframe").attr("src", "");
            });
        });
    </script>

</body>

</html>