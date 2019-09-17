# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
Quarter.destroy_all
User.destroy_all
Club.destroy_all
Recrutement.destroy_all
Request.destroy_all
Event.destroy_all

anarandahy = ["Naivo", "Andraina", "Andry", "Balita", "Bary", "Dafy", "Dafy", "Dina", "Donga", "Jaona", 
                "Falihery", "Faly", "Fanaiky", "Fetra", "Faneva", "Fanilo", "Fanomezana", "Jaonary", "Joro", "Zo",
                "Fenoery", "Fiderana", "Haba", "Haja", "Harilanto", "Itokiana", "Johary", "Kanto","Njaka", "Mamy"]
anarambavy = ["Aiky","Aina", "Aingo", "Ambina", "Ambinintsoa", "Amboara", "Ando", "Bako", "Bekoto", "Sarobidy",
                "Arena", "Diary", "Diary", "Dinasoa", "Domoina", "Eja", "Elisoa", "Fanasina", "Fandresena", "Riana",
                "Bodo", "Fanja", "Faniry", "Farasoa", "Fehizoro", "Fitia", "Hafaliana", "Harena", "Harisoa", "Koloina"]

anarana = ["RABEZAVANA","ANDRIANAIVO","RAMANANTSOA","RABEMANANJARA","ANDRIANANTENAINA","RABARISAONA","RAINIBARY","RAKOTOSAONA","RAKOTOMANGA","RASOAMAMPIONONA",
            "RAMAROSON","RASOANAIVO","RASOAMAZAVA","ANDRIAMANALINA","ZOTO","BARINJAKA","RANAVALONA","ANDRIATSITOHAINA","RAINIKETAMANGA","RAVALOMANANA",
            "RAINIKETAMANGA","RAFAMELOMA","RAININDIMBY","RAKETAKA","RAZANAMAVO","RAZANABARY","ANDRIAMANANTENASOA","RAMANANDRAIBE","RAKOTONIAINA","RANDRIA"]

anarambositra = ["Peta","Bory","Leda","Bôbô","ZetyBe","Ravoatabia","Mainty","Lavakely","Bota","Badoda",
            "Pitsana","Papeta","Ngilo","Bema","Rabisikileta","Rainitay","Gena","Tsalo","Lavaloha","Gila",
            "Doudou","Be","Piso","Rabararanta","Lalakely","Vandam","Vazah","Deda","Nini","sisi"]

tanana = ["Ambohimanatrika","Besarety","Ankadilalana","Amboanjobe","Andafiatsimo","Ivandry","Ambatolampikely","Ivato tanàna","cité Itaosy","Isotry",
            "Paraky","Anjomakely","Andramasina","Ambatofotsy","Imerintsiafindra","Ambohimalaza","Avaradoha","Imerintsiatosika","Miarinarivo","Ilafy",
            "Sabotsy-Namehana","Ambatolampy","Ambohijanaka","Tanjombato","Soavina","Anosizato","Anosibe","Antanetibe","Analavory","Manjakandriana"]

ohabolana = ["Antitra manao baolina : ny traikefa avo dia avo fa ny hoza-pe no tsy maharaka intsony",
    " olona iray no nangalatra akoho ka alasora iray vohitra no voaendrikendrika",
    " ny olona no manitsa-bazimba ka ny akoho no ahanto-doha",
    " bibilava sy olona ka samy taitra sy samy mitsoaka",
    " Be nangy mitsok'ovy, ny kibo voky tsy hitan'ny olona fa ny nangy mitombo no hitan'ny olona",
    " Manalasa toy ny sola mividy fihogo, ny volon-kelika ve no atao sori-bilana sa ny volon-tratra no atao vaky tampona",
    " senegaly nandro, ny tsikoko afaka fa ny hamaintisana tsy niova",
    " Bitsibitsiky ny lava nify, ny lavitra indray no maheno aloha",
    "Toy ny njola mitaky trosa, vao eny am bavahady dia efa mangarika",
    "Mianjonanjona ohatran'ny Sihanaka voadakan'ny osy",
    "Miteronterona toy ny Betsileo vita batisa",
    " Betsimisaraka mitaingina bicyclette, tsy mijanona raha tsy any an dranomasina",
    "Zazavavy soa petaka orona, voatondro iray no tsininy",
    "Ny maso no tia jerijery, ka ny fo no mahozo raki-dratsy",
    "Tsy tia,tsy tia ka tsy manidy trano !",
    "Arahabao ihany izay hita, fa tsy fantatra izay ho rafozana!",
    "Miavontsy feno toy ny maloto entindriaka",
    "Aza manokatra ny efa mikatona, toy ilay rafotsibe mita tatatra",
    "Sola mangery diavolana ka tsy hita izay lohany sy vodiny",
    "Mampidera ny havetavetana toy ny bevohoka tsy manambady",
    "Be feo tampoka toy ny sarim-bavy nenjehan'aliaka",
    "sarim-bavy manao zipo kely ka ampangain'ny volontongony",
    " Ratsy tarehy be afara ka tsy matahotry ny ho lany zara",
    " Bôgôsy tsy manambola ka ambakan'ny sola",
    " Leo ny miaina toy ny jamba mitondra môtô",
    " Mizaka ny tsy eran'ny aina toy ny bandikely miampofo mamasôsy",
    " Sola miloloha voatavo ka tafaraka samy malama",
    " Jamba mamono vady ka aiza ho aiza ny misy an-tena?",
    " Jerem-potsiny toy ny masera tsara sôra",
    " rafotsibe very laona ka miandry izay higadonany"]

klioba = ["FC ZANDRIKELY","FC HEZAKA","ZAZANAVELA","FC RASTA","FANALA FC","FC TSIKIVY","TanaFORMATION","REVY FC","FC BETSILEO","DRAGON Rouge",
            "KARY fc","MANJAKAMIADANA","FC BEMIRAY","KANDRA Sport","EZAMI","FC RAMIARAMILA","ENJANA fc","FIRAISANKINA","ZAZA MADITRA FC","",
            "Tanora Club","Cnaps Sport","Ajesaia","AS ADEMA","COSFAP","JGJY","JIOJIO","BGFBF","BGF","SDCDS"]

antony = ["Notre club de foot recrute pour le moment un ou plusieurs joueur talentueux. Vous, oui vous, vous pouvez postuler et passer le teste pour conquérir cette post",
            "C'est le recrutement chez nous! vous voulez devenir le futur star dy foot? c'est le moment ou jamais de tenter votre chanche en intégrant notre équipe! postuler des maintenant",
            "Alert verte! c'est reparti, la nouvelle vague de recrutement débute chez nous, allez allez allez, postulééééééééééééééééé!",
            "Holla holla, c'est pour toi! tu sais très bien que c'est en forgeant qu'on devient forgeron, alors sans plus attendre, intégré notre équipe maintenant"]
 
 sokajy = ["U16","U14","U18","Minim","Sénior","vétérant","junior"]

    for i in (0..29)
        Quarter.create(zip_code: Faker::Address.zip_code,
                    name: tanana[i]
                    )
    end

puts "30 seed for Quarter created succesfully with 4 attributs"

    for i in (0..29)
        User.create(email: Faker::Internet.email,
                    password: "123456", 
                    quarter_id: rand(1..30),
                    club_id: rand(1..30),
                    first_name: anarandahy[i],
                    last_name: anarana[rand(0..29)],
                    age: rand(12..50),
                    description: ohabolana[rand(0..29)],
                    gender: "homme",
                    pseudonym: anarambositra[rand(0..29)]
                    )
    end

    for i in (0..29)
        User.create(email: Faker::Internet.email,
                    password: "123456", 
                    quarter_id: rand(1..30),
                    club_id: rand(1..30),
                    first_name: anarambavy[rand(0..29)],
                    last_name: anarana[rand(0..29)],
                    age: rand(12..50),
                    description: ohabolana[rand(0..29)],
                    gender: "homme",
                    pseudonym: anarambositra[rand(0..29)]
                    )
    end

puts "20 seed for Recrutement created succesfully with 2 attributs"

for i in (0..29)
        Club.create(name: klioba[i],
                    category: sokajy[rand(0..6)], 
                    admin_id: rand(1..60), 
                    quarter_id: rand(1..30))
    end
puts "10 seed for user created succesfully with 2 attributs and quarter_id"

    20.times do
        a = 21
        date = "#{rand(2019..2022)}/#{rand(1..12)}/#{rand(1..30)}"
        Recrutement.create(content: antony[rand(0..3)],
                                deadline: date, club_id: rand(1..30))
        a +=1
    end



puts "10 seed for Club created succesfully with attribut user_id and quarter_id"

    10.times do
        Request.create(application_letter: ohabolana[rand(0..29)], 
            parcours: Faker::Movies::Hobbit.character, 
            user_id: rand(1..30), 
            recrutement_id: rand(1..20))
    end

puts "10 seed for Request created succesfully with attribut user_id "

    20.times do
      date = "#{rand(2019..2022)}/#{rand(1..12)}/#{rand(1..30)}"
        Event.create(start_date: date, 
                    duration: 5*rand(2..10), 
                    title: anarambositra[rand(0..29)], 
                    description: ohabolana[rand(0..29)], 
                    price: rand(10..50), 
                    location: ohabolana[rand(0..29)], 
                    club_id: rand(1..30)
                    )
    end

puts "20 seed for Events created succesfully with attribut user_id "