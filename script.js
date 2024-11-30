let isAdult = false;
function getDogImagePath(breed, furColor, character) {
    const breedMapping = {
        'Pudel': 'pudel',
        'Deutscher Schäferhund': 'schaeferhund',
        'Chihuahua': 'chihuahua',
        'Dackel': 'dackel',
        'Mops': 'mops'
    };

    const characterMapping = {
        'liebevoll': 'niedlich',
        'kämpferisch': 'kaempferisch',
        'lustig': 'lustig'
    };

    const formattedBreed = breedMapping[breed] || 'default';
    const furColorMapping = {
        'weiß': 'weiss',
        'rosa': 'rosa',
        'braun': 'braun'
    };
    
    const formattedFurColor = furColorMapping[furColor.toLowerCase()] || 'default';
    
    const formattedCharacter = characterMapping[character] || 'default';

    // Ändere die Dateiendung zu .jpg
    return `./images/${formattedBreed}_${formattedFurColor}_${formattedCharacter}.jpg`;
}
let reviewGenerated = false;

function showAgeConfirmation(isAdultChoice) {
    isAdult = isAdultChoice;
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('age-confirmation').style.display = 'block';

    const ageConfirmationText = isAdult ? 
        "Wirklich? So siehst du gar nicht aus! Schön, dass du schon so alt und auch geistig gereift bist. Dann darfst du ja auch schon ein Nussschnäpschen trinken. Nimm hin! Prost!" :
        "Achso, du bist noch gar nicht erwachsen? Macht nix, dieses Spiel ist komplett jugendfrei! Na los, ein kleiner, digitaler Wuffi wartet nur darauf, von dir gebastelt zu werden!";

    document.getElementById('age-confirmation-text').textContent = ageConfirmationText;
}

function startDogCreation() {
    document.getElementById('age-confirmation').style.display = 'none';
    document.getElementById('dog-creation').style.display = 'block';
}

function createDog() {
    const breed = document.getElementById('breed').value;
    const furColor = document.getElementById('fur-color').value;
    const character = document.getElementById('character').value;
    const name = document.getElementById('name').value.trim() || 'Unbenannter Hund';

    const dogImage = getDogImagePath(breed, furColor, character);

    document.getElementById('dog-creation').style.display = 'none';
    document.getElementById('dog-result').style.display = 'block';
    document.getElementById('dog-name').textContent = `Name deines Hundes: ${name}`;
    document.getElementById('dog-image').src = dogImage;

    generateRating(name);
    reviewGenerated = false;
}

function generateRating(name) {
    const rating = Math.floor(Math.random() * 10) + 1;
    document.getElementById('dog-rating').textContent = `Bitchbaron69 vergibt ${rating} von 10 Sternen`;
    document.getElementById('new-dog').style.display = 'block';
}

function generateReview() {
    if (reviewGenerated) return;

    const eyesComments = [
        "Beginnen wir mit den Augen deines Hundes. Sie sind wirklich wunderschön, zum Verlieben! Ich möchte ihnen immerzu zuzwinkern. Herzallerliebst!",
        "Dein Hündchen hat Standardaugen, wenn wir mal ehrlich sind. Sie sind halt so OK, aber ich sage mal so: Sie sind halt zum Gucken da, wenn du verstehst, was ich meine…",
        "Ich blicke in die Augen deines Hundes und denke mir: Ja, ja, ja! Auf dieses Hündchen habe ich ein Auge geworfen. Hihihi!",
        "Die Augen deines Hundileins ziehen mich voll und ganz in ihren Bann. Da kann ich gar nicht anders als noch einen Extrastern zu vergeben!",
        "Die Augen von dem schnuffigen Wauwau haben etwas hypnotisierendes. Etwas... hypnotisierendes... Ich werde dir jetzt Futter holen. Ich werde dich so lange kraulen wie du willst. Du bist mein Meister, oh großer Hundegott!",
        "Dein Kläffer ist ja ganz putzig, aber die Augen?!? Mir war bis gerade gar nicht bewusst, dass Augen auch potthässlich sein können! Augen zu, Hund! Augen zu!",
        "Also, wenn ich in die Augen deines Hundes schaue, dann weiß ich nicht so recht. Sollten die Augen nicht das Herz erwärmen? Sie sehen so bedrohlich aus, als würde er mich gleich fressen wollen."
    ];

    const furComments = [
        "Kommen wir zum Fell. Das Fell hast du sehr schön designt! Es glänzt, funkelt geradezu. Man möchte dieses niedliche Wesen geradezu knuddeln wie ein Kuscheltier! Schade, dass es nur digital existiert.",
        "Das Fell sieht richtig schön flauschig aus. Da würde ich gerne mal dran riechen.",
        "Und jetzt schau dir doch mal das Fell deines neuen Haustieres an! Alles voller Flöhe und alter Kaugummis! Wie kann man eine nagelneue Kreation so schnell verwahrlosen lassen?",
        "Ist das wirklich die Fellfarbe, die du haben wolltest? Bist du sicher, dass kein größerer Hund einen dampfenden Haufen auf deinem abgelegt hat?",
        "Mir gefällt das Fell deines neuen Haustieres! Super Frisur, sieht ein bisschen so aus wie Elvis, findest du nicht auch? Ich glaube, ich drucke mir gleich ein Bild von deinem Hund aus und gehe damit zu meinem Frisör. So will ich auch aussehen!",
        "Und jetzt mal Klartext: Das nennst du Fell? Dir ist schon klar, dass Hunde schönes Fell haben sollten, oder? Also DAS hier geht ja mal gar nicht! Ab zum Hundefrisör!",
        "Das Fell ist so 2023. Weißte selbst, ne?"
    ];

    const noseComments = [
        "Die Schnauze deines Hundes ist auf jeden Fall Party! Beiß mich, Bello! Wau Wau!",
        "Wat ne geile Schnauze! Wollte ich mal kurz einwerfen.",
        "Dein Hund ist auch offensichtlich die Art von Wesen, das seine Schnauze in Angelegenheiten steckt, die es nichts angehen, oder? Das sehe ich direkt! Bleib weg von mir! Es muss dich überhaupt nicht interessieren, was ich im Keller anbaue oder nicht anbaue!",
        "Und schauen wir uns doch mal die Schnauze deines Hundes im Detail an. So, angeschaut. Du auch? Also mehr muss man dazu auch nicht sagen, oder?",
        "Ooooooh, und was für eine zuckersüße Hundeschnauze dein Wuffilein hat! Ich habe schon dreimal versucht ihn zu füttern, und jedes Mal ist mir hinterher aufgefallen, dass der Hund ja nur digital auf dem Bildschirm existiert. Ich muss mal eben Zewa holen, Sekunde…",
        "Halt die Schnauze – sowas sollte man nicht sagen, das wäre ja frech. Die Schnauze deines Hundes halte ich aber für gelungen.",
        "Die Schnauze von dem Tierchen würde ich an deiner Stelle nochmal überarbeiten. Von diesem entstellten Biest würde ich mich jedenfalls nicht ablecken lassen."
    ];

    const tailComments = [
        "Und jetzt wird es Zeit über den Schwanz zu reden. Hihihi. Lang, majestätisch, pelzig – das nenne ich mal einen gelungenen Hundeschwanz!",
        "Der Schwanz ist ja ganz gut geworden. Aber wedeln will das kleine Hündchen wohl nicht damit, was? Na komm schon: Wedle! Hin und her! Wedeln, verdammt! WEDELN!",
        "Was wäre ein Prachthund ohne einen prächtigen Schwanz? Du hast Glück, dass du dem Schwanz offensichtlich Priorität eingeräumt hast. Sonst hätte ich mindestens einen Stern abgezogen.",
        "Der Schwanz von deinem Hünchen ist – ein Schwanz. Wie in der Schwanzabteilung im Supermarkt im Regal mit den Standardschwänzen ausgesucht. Ich meine: Hallo? Willst du einen Allerwelts-Straßenköter basteln oder mich wirklich beeindrucken?",
        "Netter Schwanz, aber ist der nicht vielleicht ein Bisschen klein? Ich meine, klar, auf die Größe kommt es nicht an, aber ich meine so im Verhältnis zum Körper. Ästhetik spielt halt auch eine Rolle…",
        "Beim Hundeschwanz bist du echt kreativ geworden, Respekt! Ich sehe ihn förmlich vor Begeisterung wedeln. Hast du fein gemacht! Braver Spieler!",
        "Der Schwanz von deinem Hund hat etwas, das muss ich zugeben. Aber: Hast du wirklich beim Gestalten an einen Hund gedacht, oder hattest du eher ein süßes kleines Schweinchen im Sinn? Ich frage ja nur…"
    ];

    const nameInput = document.getElementById('name').value.toLowerCase();
    const nameComments = {
        rainer: "Dein Hund hat einen richtig coolen Namen. Rainer klingt schon so, als ob er sämtliche Geheimnisse erschnüffeln könnte. Er wird bestimmt mal ein Detektiv!",
        jacques: "Mir gefällt der Name Jacques! Kann es sein, dass dein Hund gerne kombiniert und gerne Nüsschen futtert?",
        dude: "Der Name deines Hundes ist zwar ziemlich witzig, aber ich glaube der Gag nutzt sich schnell ab. Du solltest den WauWau nächste Woche umbenennen.",
        helga: "Der Name deines Hundes ist zwar ziemlich witzig, aber ich glaube der Gag nutzt sich schnell ab. Du solltest den WauWau nächste Woche umbenennen.",
        tasso: "Der Name deines Hundes ist zwar ziemlich witzig, aber ich glaube der Gag nutzt sich schnell ab. Du solltest den WauWau nächste Woche umbenennen.",
        erzähler: "Und zum Namen: Dein Hund ist also ein Erzähler? Was soll er denn erzählen? Wau Wau? Du kommst auf Ideen…",
        delphine: "Besonders ansprechend finde ich den Namen deiner Hündin. Klingt wohlhabend. Vielleicht hat sie ja eine kleine Spende für ehrenamtlich arbeitende Juroren übrig? Ich kann dir gerne meine PayPal-Adresse schicken.",
        polyzaster: "Besonders ansprechend finde ich den Namen deiner Hündin. Klingt wohlhabend. Vielleicht hat sie ja eine kleine Spende für ehrenamtlich arbeitende Juroren übrig? Ich kann dir gerne meine PayPal-Adresse schicken.",
        holger: "Der Name deines Hundes ist düster. Hoffen wir mal, dass er nicht so sehr vom Pech verfolgt wird wie mein Kumpel.",
        schwarz: "Der Name deines Hundes ist düster. Hoffen wir mal, dass er nicht so sehr vom Pech verfolgt wird wie mein Kumpel.",
        umberta: "Der Name deine Hundes ist etwas lahm. Ich meine, heutzutage heißt doch jeder Umberta, oder? Das nächste Mal etwas kreativer, bitte!",
        uma: "Und wenn ich mir noch den Namen deines Wauwaus ansehe, möchte ich ihn einfach nur durchkitzeln. Killekillekille!",
        schumann: "Und eines muss ich zugeben: Dein Hund ist ein echter Schumann! Wuff.",
        hanni: "Mit dem Namen hast du dir aber einen üblen Scherz erlaubt! Ich bin kein Hund, sondern ein seriöser Juror!",
        bitchbaron69: "Mit dem Namen hast du dir aber einen üblen Scherz erlaubt! Ich bin kein Hund, sondern ein seriöser Juror!",
        schmidt: "Und übrigens: Irgendwie erinnert mich der Hund an meine Mama. Es muss das Fell sein…",
        fein: "Einen ganz feinen Namen hast du da. Kann es sein, dass dein Hund vom Sternzeichen her Zwilling ist?",
        barlady: "Oh, ich muss meine Bewertung nach oben korrigieren! Die kleine Barlady hat mir ganz brav eine Runde Nussschnaps vorbeigebracht. Braves Hundchen!",
        gärtner: "Jetzt aber zu meinem Hauptkritikpunkt: Dein liebestoller Köter hat meine Premiumhündin geschwängert! Gärtner war es, da bin ich mir ganz sicher!",
        ninel: "Und - moment, wie hast du deinen Hund genannt? Ach du liebes Lieschen!",
        handy: "Ähm, sag mal: Hat dein Hund gerade ein Video von mir gemacht? Ja, doch, das ist die einzige Erklärung, warum meine Webcam plötzlich angegangen ist. Jetzt hat der Arsch aber Kirmes!",
        heinrich: "Ähm, sag mal: Hat dein Hund gerade ein Video von mir gemacht? Ja, doch, das ist die einzige Erklärung, warum meine Webcam plötzlich angegangen ist. Jetzt hat der Arsch aber Kirmes!",
        jogi: "Irgendwie erinnert mich dein Hund an jemanden. Ist er schon berühmt? Ich glaube ich hätte gern ein Autogramm!",
        löw: "Irgendwie erinnert mich dein Hund an jemanden. Ist er schon berühmt? Ich glaube ich hätte gern ein Autogramm!",
        heribert: "Aber eine Frage noch: Dein Hund ist ja nass wie ein begossener Pudel! Und trägt er da ein enthauptetes Huhn in der Schnauze spazieren? Was ist passiert?",
        faust: "Aber eine Frage noch: Dein Hund ist ja nass wie ein begossener Pudel! Und trägt er da ein enthauptetes Huhn in der Schnauze spazieren? Was ist passiert?",
        umberto: "Moment mal, das sehe ich ja jetzt erst! Dreh deinen Hund mal um – tatsächlich: Jemand hat ihm einen Penis auf den Hintern gemalt. Unfassbar! An deiner Stelle würde ich die drei Gänsefüßchen engagieren!",
        dommsau: "Was für ein entzückender Name! Ich bin mir nicht sicher, ob er deinem Hund gefallen würde, aber wozu gibt es Spitznamen?",
        dreck: "Ach ja! Jetzt fällt es mit wieder ein! Den Namen habe ich schon einmal gehört! Das ist doch die Abkürzung für Schimanski, oder?",
        Jack: "Wenn du mich fragst, ist Jack ein richtiger Outdoor-Rüde! Geh doch mal mit ihm spazieren! Ja, ich weiß, dass er nur digital existiert, aber du kannst doch dein Handy mitnehmen und den Bildschirm auf die Straße richten. Na los, frische Luft tut euch beiden gut!",
        contessa: "Wenn ich mir deine Hündin nochmal ganz genau betrachte, wirkt sie auf mich wie eine echte Künsterin! Allerdings auch etwas aufdringlich. Irgedwie finde ich es unangenehm, wenn sie mich so anstarrt. Ich meine, klar weiß ich, dass sie nur ein digitaler Hund im PC ist, aber kann es sein, dass sie sieht, dass ich gerade nackt vor dem Bildschirm sitze? Ich ziehe mir schnell was an...",
        josefine: "Ist dir eigentlich schon mal aufgefallen, dass sich dein Hund nicht bewegt? Er kann sich wohl auf Kommando totstellen. Oder? Jofesine? JOSEFINE!",
        wachtmeister: "Irgedwie habe ich das Gefühl, dass der Köter ein prächtiger Polizeihund werden könnte. Fass!",
        knüppel: "Irgedwie habe ich das Gefühl, dass der Köter ein prächtiger Polizeihund werden könnte. Fass!"
    };

    let nameComment = null;
    for (const key in nameComments) {
        if (nameInput.includes(key)) {
            nameComment = nameComments[key];
            break;
        }
    }

    if (!nameComment) {
        const defaultComments = [
            "Der Name deines Hundes ist ganz putzig, aber er könnte etwas schöner sein. Überleg doch nochmal, ob dir nicht ein passenderer Name einfällt.",
            "Das mit dem Namen probieren wir aber nochmal. Mein Vorschlag wäre, dass du ihn Fass nennst. Weil er so rund aussieht.",
            "Der Name ist gut, aber mit deiner Erlaubnis nenne ich deinen Hund lieber Agnes-Marie. Einfach so.",
            "Zum Namen des Hundes sage ich nur eines: Wau Wau!",
            "Dein Hund hat einen super Namen! Den merke ich mir. Ich kenne da so einen Dude, der braucht öfter mal neue Namen, vielleicht wäre das was für ihn.",
            "Übrigens: Cooler Hundename! Pro-Tipp: Dazu passt als zweiter Vorname Brunhilde.",
            "Ich mag den Namen des Hundes. Ich hätte zwar eher einen Pinguin so genannt, aber solange es kein Spiel gibt, bei dem man Pinguine erstellen kann, will ich mal ein Auge zudrücken.",
            "Der Name deines Hundes versprüht einen Hauch von Hollywood. Vielleicht wird das Wauzi ja mal ein großer Filmstar! Vergesst aber nicht, mir persönlich bei den Oscars zu danken! Ohne meine Profibewertung wäre das gar nicht möglich gewesen.",
            "Dein Hund hat einen pfiffigen Namen. Gib es zu, du würdest selbst am liebsten so heißen, oder? Naja, auch wenn deine Eltern grausam zu dir waren, kannst du ja trotzdem alle Liebe und Hingabe in deinen digitalen Nachwuchs stecken.",
            "Ach, und wusstest du, dass dein gewählter Name zu den Top 5 der häufigsten Hundenamen im deutschsprachigen Raum gehört? Nicht? Ich auch nicht."
        ];
        nameComment = defaultComments[Math.floor(Math.random() * defaultComments.length)];
    }

    // Review Text
    const reviewText = `
        <p>Das sage ich dir gerne! Als bester Juror des Spiels sind meine Bewertungen natürlich gut begründet. Also pass auf:</p>
        <p>${eyesComments[Math.floor(Math.random() * eyesComments.length)]}</p>
        <p>${furComments[Math.floor(Math.random() * furComments.length)]}</p>
        <p>${noseComments[Math.floor(Math.random() * noseComments.length)]}</p>
        <p>${tailComments[Math.floor(Math.random() * tailComments.length)]}</p>
        <p>${nameComment}</p>
        <p>Du siehst also: Meine Bewertung ist perfekt! Wenn du noch immer unzufrieden bist, bastle doch einfach einen neuen Hund. Dieses Mal gibst du dir aber etwas mehr Mühe, oder?</p>
    `;

    document.getElementById('dog-review').innerHTML = reviewText;
    document.getElementById('dog-review').style.display = 'block';
    reviewGenerated = true;
}

function newDog() {
    document.getElementById('dog-result').style.display = 'none';
    document.getElementById('dog-review').style.display = 'none';
    document.getElementById('dog-creation').style.display = 'block';
}
function handleImageError(imageElement) {
    imageElement.src = './images/default.jpg'; // Standardbild mit .jpg-Endung
    imageElement.alt = 'Standardbild für Hunde';
}


