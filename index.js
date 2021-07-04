function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
  


// 
// 
// INSULTS ARE NEECHE(DOWN THERE :)) 
//                                |
// 
// 
// 

  const gali = ["aberrant","abortion","amateur",
  "animal","anorak","ape","ape covered in human flesh","apefucker",
  "arfarfan'arf","arse","arsebreath","arsecunt","arseface","arsehole","arse-licker","ass","assaholic","assbag","assbutt","ass clown","asscunt","assface","assfag","assfaggot","assfucker","asshat","asshole","ass-kisser","ass-licker","assmonkey","assmouth","assmunch","ass-nugget",
  "ass sucker","asstard","asswagon","assweed","asswipe",
  "aunt fucker","baby","backwoodsman","badass","badgerfucker","bag of dicks","Bag whore","ballkicker","ballsack",
  "bandit","bangsat","barbarian","Barbie-fucker","bastard","Bawtboy","bean head","beast","beetlehead","beginner","beldame","bell-end","berk","bespawler","beta","Beta cuck","big chung","bimbo","birdbrain","birdfucker","bitch","bitchass","bitch ass motherfucker",
  "bitch boy","bitchcunt","bitchdicksucker","bitchface","bitchfucker","bitchtits","bitchwad","bitchwhore","bitchzilla","biznatch","blackguard","blaggard","blockhead","blubber gut","bluntie",
  "bogeyman","bonehead","boob","booby","boomer","bootlicker","boozer","Bot","boyfucker","bozo","brainlet","brickfucker","brickhead","brotherfucker","buffoon","bugfucker","bugger","bullfuck","bum","bumbo","bum chum","bum-fucker","burden","buttass","buttbreath","buttfucker","butthead","butthole","buttkisser","buttlicker","buttmunch","butt sniffer","Cad",
  "camelfucker","catfucker","caveman","chauvinist","chav","cheater","chicken","chickenfucker","childfucker","chode","chump","churl","clitbag","clithead","Clod","clown","cock","cockalorum",
  "cockboy","cockburger","cockfucker","cockhead","cockholster","cockmaster","cockroach","cocksucker","cocktease","cockwaddle",
  "cockweasel","cockwomble","coffee slurper","commie","con man","con merchant","coomer","corpsefucker","cougar","country bumpkin","cousinfucker","cow","coward","cowfucker","crackhead","crack whore","craphole",
  "creep","cretin","cro magnon","crook","cuckold","cumbucket","cum dumpster","cum guzzler","cum-licker","cumslut","cumstain","cunt","cuntass","cuntbiscuit","cuntbitch","cuntbreath","cuntface","cunt fart","cuntfucker","cuntlicker","cunt muncher",
  "cunt rag","cuntshit","cuntsucker","cuntzilla","daddyfucker","dandiprat","daughterfucker","deadhead","degenerate",
  "der-brain","desperado","devil","dick","dickass","dickbag","dickbreath","dickcheese","dickface","dickfucker","dickhead","dickhole","dickless","dicklicker","dick man","dick mouth","dick sniffer","dicksplash","dick-sucker","dicktard","dickwad","dickweasel","dick weed","dildo","dillhole","dimmadumbass","dimwit","ding-head","dingleberry","dinosaur",
  "dipfuck","dipshit",
  "dirtbag","dirthead","dirtwad","dodo","dog","dogbolt","dogbreath","dogfucker","dolt","donkey","donkey dick",
  "donkeyfucker","doofus","dope","dotterel","douche","douche bag","doucheburger","douche canoe","douchefag","douchelord","douche nozzle","douchewad","douchewagon","dracula","dreamer","drunkard","duckfucker","dumbarse","dumbass",
  "dumbbell","dumb fucker","dumbo","dummy","dunce","duncebucket","dweeb","dweebling","earthworm","edgelord","egghead","egotist","envirotard","eunuch","evildoer","fag","faggotface","fagtard","fagtits","failed abortion","fanny","farmer","fart","fartface","fascist","fatass",
  "fatfuck","fat geezer","fatherfucker","fatso","fat-tard","fatty","fellow","fembot","fetus","fibber","fink","fish",
  "fish fucker","fishwife","fixer","flag fucker","flake","flat-earther","fool","four eyes","freak","fruitcake","fuck","fuckass","fuckbait","fuckbucket","fucker","fuckface","fuckhead","fucking bitch","fucklord",
  "fuck noggin","fucknose","fuck nugget","fuckrod","fuckshit","fuckskull","fuckstain","fuckster","fucktard","fucktoy","fuckweasel","fuckwhistle","fuckwit","fugly","garbage","gawk","gaytard","gaywad","geebag","gimp","git","gobshite","gold digger","goof","goon","goose",
  "gorilla","grandmotherfucker","greeniac","grouch","grumpy","handfucker","headass","helldog","hikikomori","hilding","hillbilly","hippie","ho","hobbledehoy","hoe","hog","homo","hooligan","hooplehead","horsefucker","horse's ass","horse's necktie","hosebag","hussy","hypocrite",
  "idiot","idiotist","idiot sandwich","ignoramus","imbecile","inbred","incel","intercourser","jabroni","jackass","jackhole","jackwagon","jagweed",
  "jamoke","jelly","jerk","jerkoff","jerkwad","jit stain","jizz guzzler","joker","junkie","karen","kevun","keyboard warrior","kidfucker","klutz","knacker","lady of the evening","lamebrain","landwhale","langer","lard face","liar","libtard","lickspittle","lobotomite",
  "loser","louse","low-life","lunatic","lunkhead","lurdane","lush","mackerel","madman","maggot","mamzer","meanie","megabitch","megadouche","Meg Griffin","mental midget","milksop","Mingie","minx","missing link","Mohambie","mongoose","monkey","monkeyface","monster","mooncalf","moron","motherfucker","mousefucker","mouth breather","Mr. Anger",
  "Mr. Obsessed","Mr. Struggle","Mr. Talk","mucky pup","mumpsimus","mung","muppet","mutant","mutt","nazi",
  "neanderthal","Nebbish","neckbeard","necrophiliac","ne'er-do-well","nephew fucker","nerd","nerf herder","niece fucker","nimrod","nincompoop","ninny","ninnyhammer","nitwit","nobody","non","nonce","noob","noodle","numbnuts","numbskull","numpty","numskull","oaf","oddball","ogre","oompa loompa","orphan","outlaw","oxygen thief","pack",
  "pain in the ass","pansy","pariah","peasant","pedo",
  "pedophile","penchod","pencil dick","penis face","Penis licker","penispuffer","penis sucker","pervert","pig","pigfucker","piggy-wiggy","pikspiller","pillock","pinhead","pirate","pissbaby","pissbrain","pissbreath","pissface","pisshead","piss monkey","Pissy bitch",
  "pleb","plonker","pooface","poohead","poop hole","porno freak","potato","prick","prickface","pseudo-intellectual","pube flosser","pudwhacker","puke bag","pukeball","puppet","pussy","pussyboy","pussyfucker","pussy pisser","quack","quat",
  "queer bait","querulant","raasclaat","rabbitfucker","Ranga","rapist","rat","ratcatcher","ratfink","ratfucker","redditor","redneck","reject","retard","riff-raff","roaster","robot","rowdy","rudesby","ruffian","runt","sadist","saggy fuck","Sam Rea","saprophyte","sausage-masseuse","scobberlotcher","scoozie","scoundrel","scumbag","scumbreath","scumbutt",
  "scumface","scumfuck","scumhead","scumlord","scumwad","scuzzbag","serf","sewer rat","shark","sheepfucker","sheepshagger","shill",
  "shitass","shitbag","shitball","shitbird","shitbrain","shitbreath","shitbucket","shitbum","shitcunt","shitdick","shit-eater","shitehawk","shitface","shit-for-brains","shitfuck","shitfucker","shitgoblin","shithead","shitizen","shitlord","shitneck","shitnugget","shitpicker","shitpiss","shitpot","shitpuddle","shitsack","shit stain","shitter","shitweasel",
  "shmekl","shrew","shyster","sibling fucker","simp","simpleton","sissy","sisterfucker","sister humper","skank","sket","skite","skullfucker",
  "skunk","skunkfucker","slag","slave","sleazewad","sleeze","sleeze bag","slimeface","slob","slut","slutbag","slutfucker","sluthead","smell-feast","smellfungus","snail","snake","snob","snollygoster","snot","snotball","snotface","snothead","snotwad","snowflake","son of a bitch","son of a motherless goat",
  "son of a whore","sow","soy boy","spack","spammer","sped","sphincter","splenetic","square","stick in the mud","stink cunt","stinker",
  "stinkhole","straggot","stupid","swindler","swine","sycophant","thief","thotpocket","thundercunt","Tit","titbag","toad",
  "Toe Eyed Cabbage","tomato","tool","tranny","trash","tree hugger","troglodyte","troll","trollface","trolltard","turd","turdball","turdbucket","turdpile","twat","twattock","twatwaffle","twerp","twit","twunt","unclefucker","vagina cleaner","vampire","vandal",
  "vantz","varmint","vaxhole","vermin","vonce","wacko","wallflower","wally","wanker","wank stain","waste","Wazzock","weeze bag","weirdo","whore","whore bag","whorefucker","whore's-bird",
  "whoreson","windfucker","window licker","windsucker","wino","witch","womanizer","wommy","worm","wretch","yahoo","yes-man","yiffer","yonker","yutz","zebrafucker","zitface","zoophile","zounderkite",""]
    
// TOTAL : 719
// 
// INDEXES RANGE FROM 0 TO 718
// 
// 
// CREDIT FOR THE INSULTS : https://insult.wiki/
// 
// 
//   
// Displaying the value
if(inputVal.length<=1){
    alert("GIVE YO NAME BITCH")
}
else{
    var g = Math.floor((Math.random() * 718) + 1);
    document.getElementById("hell").innerHTML = inputVal +", you are a fucking " + gali[g] + " 😡";
}

}


