$(document).ready(function () {

    $('#84').click(function () {
        console.log('click')
    });

    $.ajax({
        type: "GET",
        url: "https://apirocks.herokuapp.com/api/v1/products",
        data: JSON.stringify(product),
        dataType: "json",
        success: function (data) {
            console.log(data)
            data.forEach(function (key) {
                $('tbody').append(`<tr>
                     <td>${key.name}</td>
                     <td>${key.price}</td>
                     <td><button class='btn' id='${key.id}'>Eliminar</button></td>
                    </tr>`)
            })
        
        }
    });

    $('form').on('submit', function (e) {
        e.preventDefault()

        var product = {
            name: $('#product').val(),
            price: $('#price').val()
        }
        console.log(product);

        $.ajax({
            type: "POST",
            url: "https://apirocks.herokuapp.com/api/v1/products",
            data: JSON.stringify(product),
            dataType: "json",
            contentType: 'application/json',
            success: function (data) {
                $('tbody').append(`<tr>
                <td>${data.name} +</td>
                <td>${data.price}</td>
                <td><button id='${data.id}'>Eliminar</button></td>
               </tr>`)
             
            }
        });

     
            
        });
    });

    
