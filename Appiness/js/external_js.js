jQuery(document).ready(function () {
    jQuery('.accordion_content h4').click(function () {
        jQuery(this).parent().toggleClass('active');
        jQuery(this).parent().siblings().removeClass('active');
    });
    jQuery('.testimonals_details ul').slick({
        centerMode: true,
        centerPadding: '180px',
        slidesToShow: 2,
        infinite: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });



});


// Dotors section
var dotors = [
    {
        dotorimg: "images/Bitmap-copy.png",
        dotorname: 'Dr. Vijay Agarwal',
        dotordegrees: "MD, MRCP, PhD,CCTLead & Sr. Consultant - Medical Oncology & Haematology",
        dotordesc: "r. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. ",
        dotorknowmore: "Know more",
    },
    {
        dotorimg: "images/Bitmap-copy.png",
        dotorname: 'Dr. Vijay Agarwal',
        dotordegrees: "MD, MRCP, PhD,CCTLead & Sr. Consultant - Medical Oncology & Haematology",
        dotordesc: "r. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. ",
        dotorknowmore: "Know more",
    }
]


var dotorcontent = document.getElementById("dotorscontent");
window.addEventListener("DOMContentLoaded", function () {

    for (i = 0; i < dotors.length; i++) {
        var dototrresult = dotors[i];
        dotorcontent.innerHTML += `
        <li>
                        <figure>
                            <img src="${dototrresult.dotorimg}" alt="Altertive">
                        </figure>
                        <h5>${dototrresult.dotorname}</h5>
                        <strong>${dototrresult.dotordegrees}</strong>
                        <p>${dototrresult.dotordesc}</p>
                        <button type="button" class="btn btn-info">${dototrresult.dotorknowmore}</button>
                    </li>
        `
    }

});

var dotorcontent1 = document.getElementById("dotorscontent1");
window.addEventListener("DOMContentLoaded", function () {

    dotors.forEach(testFunction);
    function testFunction(dototrresult) {
        dotorcontent1.innerHTML += `
        <li>
            <figure>
                <img src="${dototrresult.dotorimg}" alt="Altertive">
            </figure>
            <h5>${dototrresult.dotorname}</h5>
            <strong>${dototrresult.dotordegrees}</strong>
            <p>${dototrresult.dotordesc}</p>
            <button type="button" class="btn btn-info">${dototrresult.dotorknowmore}</button>
        </li>
        `
    }

});

// warning signs

var warnimg = "images/Group-icon.png";
var warndesc = "Failure to thrive – not gaining weight and height as per the age norms";
var warning = [
    {
        warningimg : warnimg,
        warningdesc : warndesc,
    },
    {
        warningimg : warnimg,
        warningdesc : warndesc,
    },
    {
        warningimg : warnimg,
        warningdesc : warndesc,
    },
    {
        warningimg : warnimg,
        warningdesc : warndesc,
    },
    {
        warningimg : warnimg,
        warningdesc : warndesc,
    },
    {
        warningimg : warnimg,
        warningdesc : warndesc,
    }
]

var warningli = document.getElementById("waringsign");
window.addEventListener("DOMContentLoaded", function(){
    for (n=0; n<warning.length; n++){
        var wraningresult = warning[n];
        warningli.innerHTML +=`
        <li>
            <div>
            <figure>
                <img src="${wraningresult.warningimg}" alt="logo">
            </figure>
            <p>${wraningresult.warningdesc}</p>
            </div>
        </li>
        `
        
    }
});



// testimonials
var testimonials = [
    {
        img: "images/Bitmap.png",
        title: "John Doe",
        postion: "Software Engineer",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
        img: "images/Bitmap.png",
        title: "John Doe",
        postion: "Software Engineer",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
        img: "images/Bitmap.png",
        title: "John Doe",
        postion: "Software Engineer",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
        img: "images/Bitmap.png",
        title: "John Doe",
        postion: "Software Engineer",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
        img: "images/Bitmap.png",
        title: "John Doe",
        postion: "Software Engineer",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    }
]

var slider = document.getElementById("testimonals_id");
window.addEventListener("DOMContentLoaded", function () {

    var testimonal = testimonials.map(function (test) {
        return `
        <li>
            <div class="testimonals_slide">
                <div>
                    <figure>
                        <img src="${test.img}" alt="logo">
                    </figure>
                    <div>
                        <h5>${test.title}</h5>
                        <p>${test.postion}</p>
                    </div>
                </div>
                <p>${test.content}</p>
            </div>
        </li>
        `
    });
    testimonal = testimonal.join("");
    slider.innerHTML = testimonal;


});



