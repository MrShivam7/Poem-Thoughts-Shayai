var i = 0;
        var txt1 = [
            "Mana hamari manzile alag thi, Par tumhara itni jaldi mujhse alag hona zaroori tha kya? < Tumse milke har pal mai sukoon milta tha, Par iss sukoon ka itni jaldi chhin jana zaroori tha kya? < Mana humne kuch hi pal sath mai bitaaye, Par unn pal ka itni jaldi beet jana zaroori tha kya? < Agar tumhe jana hi tha, Toh humara milna zaroori tha kya? < Mana mai tumhari kahani ka vo kirdaar hu jise bhul jana aasan hai, Par tumhara zikr meri kitaab ke har panne pe zaroori tha kya? < Palak jhapakte hi hum alag ho gaye, Magar palak jhapkana zaroori tha kya?",
            "Kuch yaadein yaad rakhna < Kuch baatein yaad rakhna < Zindagi me hum tum sath nhi rahenge < Lekin hum kabhi sath the < Ye zindagi bhar yaad rakhna",
            "Meri kitaabo me mehekte huye gulaab si yaad ho tum ❤ 🫵 < Meri tanhaayi ke andhere aasmano ka ek lauta chaand ho tum 🌙 🫀",
            "Zindagi Har Pal Kuchh Khaas Nahi Hoti, < Phoolo Ki Khushboo Hamesha Paas Nahi Hoti, < Milna Humari Takdeer Mein Tha Varna, < Itni Pyari Dosti ittefaaq Nahi Hoti",
            "Kitni udaas hongi us waqt uski ankhein < jb usne has kr kha mujhe rona a rha hai",
            "Tum Dost Ban Ke Aise Aaye Zindagi Mein, < Ki Hum Yeh Zamana Hi Bhool Gaye, < Tumhein Yaad Aaye Na Aaye Humari Kabhi, < Par Hum To Tumhein Bhulaana Hi Bhool Gaye",
            "I don't know what we are < but < I miss what we were 😞",
            "Main shayar badnaam jaise jaun 💔 < Karu khud se hi sawal hu mai kaun 👀 < Teri yaad chordti akela nhi 🥺 < Tell me how can I die alone 🫠❤️‍🩹",
            "Kasar kisi ne nhi chordi < Bs tera khoridna baaki hai < Tere baad bhikhra mera ghar sametna baaki hai < Soch is se zyada barbaad kya ho jaun < Abhi usse kisi or ke sath dekhna baaki hai",
            "Dost bhi tum < Pyaar bhi tum < Ek bhi tum < Hazaar bhi tum < Gussa bhi tum < Maafi bhi tum < Mere is zindagi ke safar me < Mere liye kaafi ho tum ❤",
            "The book was closed < But... < The story was incomplete",
            "Pal pal tadpe Jis pal ke liye < Vo pal bhi aya Kuch pal ke liye < Socha is pal ko rok lu har pal ke liye < Pr vo pal bhi thehra kuch pal ke liye",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
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
            setTimeout(typeWriter, speed); // Script will Start typing the next quote 
        }

        function previousText() {
            currentTextIndex--;
            if (currentTextIndex < 0) {
                currentTextIndex = txt1.length - 1; // get back to the last text
            }
            i = 0;
            document.getElementById("text1").innerHTML = "";
            setTimeout(typeWriter, speed);
        }
