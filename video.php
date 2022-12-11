<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link href="style/card.css" rel="stylesheet">
    <title>VIDEO</title>
</head>

<body>

    <!-- The video -->
<video autoplay muted loop id="myVideo">
  <source src="reel.mp4" type="video/mp4">
</video>

<!-- Optional: some overlay text to describe the video -->
<div class="content">
  <h1>Heading</h1>
  <p>Lorem ipsum...</p>
  <!-- Use a button to pause/play the video with JavaScript -->
  <button id="myBtn" onclick="myFunction()">Pause</button>
</div>


    <div class="row">
        <?php
        /* $json = json_decode(file_get_contents("content.json"), true);
    foreach($json["videos"] as $video){
        echo '<div class="col-6 p-0">
            <div class="card-background" style="background-image: url(\'imgs/thumbnails/' . $video["thumbnail"] . '.png\')">
                <div class="card-content text-center">' . $video["label"] . '</div>
            </div>
        </div>';

    } */
        ?>

        <div class="col-6 p-0">
            <div class="card-background" data-youtube-id="Sm3uDdiE0CU" style="background-image: url('imgs/thumbnails/1.png')">
                <div class="card-content-holder d-flex align-items-center">
                    <div class="text-center w-100">
                        <h2>asd</h2>
                        <p class="lead">chgvjbkn</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/Sm3uDdiE0CU?autoplay=1&controls=0" allowfullscreen>
    </div>

    <div style="position:relative; height:500px; width:500px; background-color:blue;">

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $(".card-background").on("click", function() {
                console.log($(this).data("youtubeId"));
            });
        });
    </script>

</body>

</html>