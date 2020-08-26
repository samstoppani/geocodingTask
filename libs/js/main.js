$('#submitBtn').click(function() {

        var formData = {
            'lat': $('#lat').val(),
            'lng': $('#lng').val()
        }

        $.ajax({
            type: 'GET',
            url: 'libs/php/getOcean.php', 
            data: formData,
            dataType: 'json',
            success: function(data) {
                console.log(data)

                if (data.status.name == "ok") {

                    if (data.data.status) {
                        $('#status').html(data['data']['status']['message']);
                        $('#ocean').html("");
                        $('#geonameId').html("");
                    } else {
                        $('#status').html("Success");
                        $('#ocean').html(data['data']['ocean']['name']);
                        $('#geonameId').html(data['data']['ocean']['geonameId']);
                    }


                }
            }
            // error: function(jqXHR, textStatus, errorThrown) {
			// 	console.log("no ocean")
			// }

        })


})