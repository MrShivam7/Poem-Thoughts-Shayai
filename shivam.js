var i = 0;
        var txt1 = [
            "Mana hamari manzile alag thi, Par tumhara itni jaldi mujhse alag hona zaroori tha kya? < Tumse milke har pal mai sukoon milta tha, Par iss sukoon ka itni jaldi chhin jana zaroori tha kya? < Mana humne kuch hi pal sath mai bitaaye, Par unn pal ka itni jaldi beet jana zaroori tha kya? < Agar tumhe jana hi tha, Toh humara milna zaroori tha kya? < Mana mai tumhari kahani ki vo kirdaar hu jise bhul jana aasan hai, Par tumhara zikr meri kitaab ke har panne pe zaroori tha kya? < Palak jhapakte hi hum alag ho gaye, Magar palak jhapkana zaroori tha kya?",
            "Kuch yaadein yaad rakhna < Kuch baatein yaad rakhna < Zindagi me hum tum sath nhi rahenge < Lekin hum kabhi sath the < Ye zindagi bhar yaad rakhna",
            "",
            "",
            "",
            ""
        ];
        var speed = 90;
        var currentTextIndex = 0;

        typeWriter();

        function typeWriter() {
            if (i < txt1[currentTextIndex].length) {
                if (txt1[currentTextIndex].charAt(i) == "<") {
                    document.getElementById("text1").innerHTML += "<br>";
                } else {
                    document.getElementById("text1").innerHTML += txt1[currentTextIndex].charAt(i);
                }
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        function nextText() {
            currentTextIndex = (currentTextIndex + 1) % txt1.length; // Cycle through quote 
            i = 0; // Reset character index
            document.getElementById("text1").innerHTML = ""; // Clear quote
            typeWriter(); // Script will Start typing the next quote 
        }

        function previousText() {
            currentTextIndex--;
            if (currentTextIndex < 0) {
                currentTextIndex = txt1.length - 1; // get back to the last text
            }
            i = 0;
            document.getElementById("text1").innerHTML = "";
            typeWriter();
        }