# -*- coding: utf-8 -*-
# Side A copy is reproduced from the printed flyers. Side B is the archive's own text
# from content.js. Nothing here is rewritten.
#
# hlang is the language the card's hotline recording was actually made in, which is not
# always the language the player is reading. There is only one take per card. The file
# itself is audio/hotline/{key}.m4a; a card with no hlang gets no phone on its front.

CARDS = [
 dict(hint1='How would you use Shell Cream in 2040?', hint2='If shells stop forming, what else could a body put on?', example='Shell Cream is made out of the acid, for people whose shells are dissolving.', key='shell-cream', name='shell cream', colour='#00652E', svg='CREAM', native='#396535', audio='02', hlang='en',
   pill='outlast the acid era...',
   caps="The ocean doesn't care about your insides.",
   tag='But we do.',
   cond=("As the ocean takes up more carbon its pH drops, and the animals that build shells lose "
         "the carbonate they need to build them. Shells grow thinner, and some begin to dissolve. "
         "We went looking for shells on this coast and came back with almost nothing."),
   src='Ocean acidification &middot; Iberian upwelling system',
   q='So what does Esposende need instead?'),

 dict(hint1='What other tabs will the water in Esposende need to fight the acid?', hint2='If the kelp forests thin out, what would you sell the sea?', example='Acid Tabs bottle the sour sea, for anyone who wants it under control.', key='acid-tabs', name='acid tabs', colour='#6e00b0', svg='ACID', native='#b35c91', audio='01', hlang='pt',
   pill='dissolve with dignity.',
   caps='Keep your acid under control. Now in dimethyl sulfide flavour!',
   tag='Ocean will never leave you now.',
   cond=("Ocean acidification is the same problem from the other side. The long record of falling pH "
         "in the Iberian upwelling system covers this coast, and the north of Portugal, Esposende "
         "included, is its most exposed part. We researched it and talked it through with a marine "
         "scientist: it is a serious threat to the sarga&#231;o and the kelp forests here, and what "
         "those forests hold goes with them as they degrade."),
   src='Falling pH &middot; kelp and sarga&#231;o forests &middot; blue carbon',
   q='What would you sell to a sea that is turning sour?'),

 dict(hint1='What would Sexy Dunes look like in 2040?', hint2='What would make people stop leaving things on the sand?', example='Sexy Dunes sells the dune as something desirable, so nobody drops litter on it.', key='sexy-dunes', name='sexy dunes', colour='#C0511B', svg='DUNES', native='#522d1d', audio='03', hlang='pt',
   pill="dunes don't lie baby!",
   caps='Research shows that dunes which look sexy have a 25% less chance of getting littered.',
   tag='We got you covered.',
   cond=("The northern Portuguese coast carries some of the highest erosion and flooding risk in the "
         "country, and the dunes take it alongside litter and everything else we leave on them. "
         "Plastic left on the sand becomes microplastic in the water."),
   src='Coastal erosion &middot; littering &middot; microplastics',
   q='What would make people leave the dunes alone?'),

 dict(hint1='If Sargassum City got built, who would live there?', hint2='What would the sarga&#231;o sell back to us, if it could?', example='Sargassum City sells flats in the seaweed, to anyone who fancies the neighbourhood.', key='sargassum-city', name='sargassum city', colour='#238528', svg='CITY', native='#98de7f', audio='04', hlang='en',
   pill='@the big sea-ty life', longname=True,
   caps='Take me down to Sargassum City. Where the grass is green and the fish are pretty.',
   tag='Get your prime location now.',
   cond=("Sarga&#231;o is being used more and will likely be commercialised further, as a resource, for "
         "oxygen, for material, for the pharmacy shelf. It is also, first, a habitat that marine life "
         "needs in order to exist at all. The weed was already a city, with residents, before anyone "
         "thought to sell it."),
   src='Sarga&#231;o as habitat &middot; sarga&#231;o as commodity',
   q='Who should the sarga&#231;o belong to?'),

 dict(hint1='What would Deluxe O&#8322; cost in 2040?', hint2='If the water stopped making oxygen, what would take its place?', example='Deluxe O2 bottles the oxygen the seaweed makes, for people bored of ordinary air.', key='deluxe-o2', name='deluxe o&#8322;', colour='#0046FF', svg='O2', native='#ccbb00', audio='05', hlang='en',
   pill='you will oooh too...',
   caps='Are you bored of your old, landy oxygen, coming from those ugly green trees?',
   tag='Breathe better darling!',
   cond=("Sarga&#231;o and the marine algae make oxygen by photosynthesis, the other half of the carbon "
         "story. That cycle is real, and warming water makes it less steady: it shifts, and in dense "
         "bloom conditions it can run the other way and strip oxygen out."),
   src='Blue oxygen &middot; photosynthesis &middot; warming seas',
   q='If the water stopped breathing, what would you sell?'),
]

MATERIALS = [
 ('sarga&#231;o',            'gathered on this coast for centuries, and still growing'),
 ('fishermen&#8217;s nets', 'mended a hundred times already, and can be mended again'),
 ('biodegradable line',  'made to go back to the sea it came from'),
 ('dune sand',           'held in place by marram grass, and by everyone who walks around it'),
 ('a shell',             'the shape the water taught an animal to build'),
 ('bioplastic',          'sarga&#231;o boiled in a kitchen pot until it sets like soft glass'),
 ('river water',         'the Neiva, carrying the land gently down to the sea'),
 ('salt',                'what the sun leaves behind, and what keeps things'),
 ('junco',               'reed from the riverbank, woven here long before plastic and woven still'),
 ('copper wire',         'carries a signal, and carries a voice'),
]

BUYERS = [
 ('a tourist who has never seen a living shell', 'tourist-no-shell'),
 ('the river Neiva, which has opinions about what reaches the sea', 'river-neiva'),
 ('a child born in Esposende this year', 'child-2026'),
 ('the last person who remembers the sarga&#231;o harvest', 'last-sargaceiro'),
 ('a fish looking for somewhere to live', 'fish'),
 ('the town council, with a budget and a coastline', 'council'),
 ('your grandmother, who swam here', 'grandmother'),
 ('the ocean itself', 'ocean'),
]

# the four tags the live recorder actually uses (recorder.html selectTag)
TAGS = [
 ('sunny',  'ensolarado'),
 ('cloudy', 'nublado'),
 ('stormy', 'tempestuoso'),
 ('normy',  'normy'),
]
