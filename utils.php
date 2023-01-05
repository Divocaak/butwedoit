<?php
function buildCard($yt, $label, $desc, $thumbnail, $txtColor, $bgColor, $detailGalPath, $detailDesc, $isLast)
{
    echo '<div class="col-12 ' . (!$isLast ? 'col-md-6 ' : '') . 'p-0">
            <div class="card-background' . (($yt == "" && $detailGalPath == ""  && $detailDesc == "") ? " card-cursor-default" : "") . '" style="background-image: url(\'imgs/thumbnails/' . $thumbnail . '\'); color: #' . $txtColor . '"
                    data-youtube-id="' . $yt . '" 
                    data-label="' . $label . '" 
                    data-desc="' . $desc . '"
                    data-gal-path="' . $detailGalPath . '",
                    data-long-desc="' . $detailDesc . '",
                    data-thumbnail="' . $thumbnail . '"
                    loading="lazy">
                <div class="card-content-holder d-none d-md-flex align-items-center" style="background-color: #' . $bgColor . '">
                    <div class="text-center w-100">
                        <h2>' . $label . '</h2>
                        <p class="lead">' . $desc . '</p>
                    </div>
                </div>
                <div class="card-content-holder-small d-block d-md-none pt-2">
                    <h2><span class="p-2 ms-2" style="background-color: #' . $bgColor . '">' . $label . '</span></h2>
                    <p class="lead"><span class="p-2 ms-2" style="background-color: #' . $bgColor . '">' . $desc . '</span></p>
                </div>
            </div>
        </div>';
}
