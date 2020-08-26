<?php 

    ini_set('display_errors', 'On');
    error_reporting(E_ALL);

    include('openCage/AbstractGeocoder.php');
    include('openCage/Geocoder.php');

    $geocoder = new \OpenCage\Geocoder\Geocoder('f26ac59a2db64250bf2e522929464fa8');

    $result = $geocoder->geocode('43.831,4.360'); # latitude,longitude (y,x)
    // print $result['results'][0]['formatted'];
    # 3 Rue de Rivarol, 30020 Nîmes, France

	header('Content-Type: application/json; charset=UTF-8');

    echo json_encode($result['results'], JSON_UNESCAPED_UNICODE);
?>