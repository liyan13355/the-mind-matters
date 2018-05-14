
const textbubble = document.getElementById('textbubble');
const overlayerTwo= document.getElementById('overlayer2');
const button= document.getElementById('btn');
const endtitle= document.getElementById('title');


const choco=document.getElementById('chocolates');
const overlayerThree= document.getElementById('overlayer3');
const clicked= document.getElementById('clicky');
const intj= document.getElementById('INTJ');
const entj= document.getElementById('ENTJ');
const intp= document.getElementById('INTP');
const entp= document.getElementById('ENTP');

const infj= document.getElementById('INFJ');
const enfj= document.getElementById('ENFJ');
const infp= document.getElementById('INFP');
const enfp= document.getElementById('ENFP');

const istj= document.getElementById('ISTJ');
const estj= document.getElementById('ESTJ');
const isfj= document.getElementById('ISFJ');
const esfj= document.getElementById('ESFJ');

const istp= document.getElementById('ISTP');
const estp= document.getElementById('ESTP');
const isfp= document.getElementById('ISFP');
const esfp= document.getElementById('ESFP');

const backbutton= document.getElementById('back');

const text= document.getElementById('overit');
const overlay2= document.getElementById('overlay2');

const head=document.getElementById('head');

const movie=document.getElementById('movie');
const lightbox=document.getElementById('lightbox');


function firstNext () { 

	textbubble.classList.add('nothing');
	overlayerTwo.classList.add('nothing');
	button.classList.add('nothing');
	endtitle.classList.add('nothing');

	choco.classList.remove('nothing');

	backbutton.classList.remove('nothing');

}

choco.onclick= function() {

	event.preventDefault();

	overlayerThree.classList.remove('nothing');
	clicked.classList.remove('nothing');
	
	intj.classList.remove('nothing');
	entj.classList.remove('nothing');
	intp.classList.remove('nothing');
	entp.classList.remove('nothing');
	infj.classList.remove('nothing');
	enfj.classList.remove('nothing');
	infp.classList.remove('nothing');
	enfp.classList.remove('nothing');

	istj.classList.remove('nothing');
	estj.classList.remove('nothing');
	isfj.classList.remove('nothing');
	esfj.classList.remove('nothing');
	istp.classList.remove('nothing');
	estp.classList.remove('nothing');
	isfp.classList.remove('nothing');
	esfp.classList.remove('nothing');

}



button.onclick= function () {
	firstNext();
}


const backagain= document.getElementById('backk');

const thirdpage= document.getElementById('wholepicture');

const overlay= document.getElementById('overlay');


intj.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	backagain.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie.classList.remove('nothing');
	head.innerHTML='INTJ - The Architect; Introvert, Intuitive, Thinking, Judging' + '<br/><br/>' + 'It\’s lonely at the top, and being one of the rarest and most strategically capable personality types, INTJs know this all too well. INTJs form just two percent of the population, and women of this personality type are especially rare, forming just 0.8% of the population – it is often a challenge for them to find like-minded individuals who are able to keep up with their relentless intellectualism and chess-like maneuvering. People with the INTJ personality type are imaginative yet decisive, ambitious yet private, amazingly curious, but they do not squander their energy.'
				+ '<br/><br/>' + 'In romance, people with the INTJ personality type approach things the way they do with most situations: they compose a series of calculated actions with a predicted and desirable end goal – a healthy long-term relationship. Rather than falling head over heels in a whirlwind of passion and romance, INTJs identify potential partners who meet a certain range of pre-determined criteria, break the dating process down into a series of measurable milestones, then proceed to execute the plan with clinical precision.'
			}

	const movieclose=document.getElementById('movieclose');

movie.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/OvdQYzRHlO0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}




const movie2=document.getElementById('movie2');
entj.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie2.classList.remove('nothing');
	backagain.classList.remove('nothing');
	head.innerHTML='ENTJ - The Commander; Extrovert, Intuitive, Thinking, Judging' + '<br/><br/>' + 'ENTJs are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. But unlike their Feeling (F) counterpart, ENTJs are characterized by an often ruthless level of rationality, using their drive, determination and sharp minds to achieve whatever end they’ve set for themselves. Perhaps it is best that they make up only three percent of the population, lest they overwhelm the more timid and sensitive personality types that make up much of the rest of the world – but we have ENTJs to thank for many of the businesses and institutions we take for granted every day.'
				+ '<br/><br/>' + 'As in other areas of their lives, ENTJs approach dating and relationships with a set of goals and a plan to achieve them, and proceed to do so with impressive energy and enthusiasm. People with the ENTJ personality type are in it to win, and will gladly take leading roles in relationships from the start, assuming personal responsibility for how smoothly things go and working actively to ensure a mutually rewarding experience. Romantic relationships are a serious business, and ENTJs are in it for the long haul.'
}

movie2.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/yL9rSwrsMHw?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}





const movie3=document.getElementById('movie3');

intp.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie3.classList.remove('nothing');
	backagain.classList.remove('nothing');
	head.innerHTML='INTP - The Logician; Introvert, Intuitive, Thinking, Perceiving' + '<br/><br/>' + 'The INTP personality type is fairly rare, making up only three percent of the population, which is definitely a good thing for them, as there’s nothing they’d be more unhappy about than being "common". INTPs pride themselves on their inventiveness and creativity, their unique perspective and vigorous intellect. Usually known as the philosopher, the architect, or the dreamy professor, INTPs have been responsible for many scientific discoveries throughout history.'
				+ '<br/><br/>' + 'When it comes to romantic relationships, INTPs have an interesting mixture of traits that often pleasantly surprise their partners. People with this personality type are always full of ideas, but they have few opportunities to explore their more romantic notions. As with any of their theories, INTPs love sharing with others, and in finally meeting someone where romantic thoughts are appropriate, they show themselves to be excited, enthusiastic, and even playful, flirting with word-play and intellectual games.'
			
}

movie3.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/mqmIMvWnIV8?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	movieclose.classList.remove('nothing');
}




const movie4=document.getElementById('movie4');

entp.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie4.classList.remove('nothing');
	backagain.classList.remove('nothing');
	head.innerHTML='ENTP - The Debater; Extrovert, Intuitive, Thinking, Perceiving' + '<br/><br/>' + 'The ENTP personality type is the ultimate devil’s advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. Unlike their more determined Judging (J) counterparts, ENTPs don’t do this because they are trying to achieve some deeper purpose or strategic goal, but for the simple reason that it’s fun. No one loves the process of mental sparring more than ENTPs, as it gives them a chance to exercise their effortlessly quick wit, broad accumulated knowledge base, and capacity for connecting disparate ideas to prove their points.'
				+ '<br/><br/>' + 'If there’s one thing ENTPs are good at, it’s coming up with a never-ending stream of innovations and ideas to keep things moving forward, and this is evident in their romantic relationships as well. For people with the ENTP personality type growth is key, and even before they’ve found a dating partner, they imagine all the ways that they can experience new things together, to grow in tandem. This can be an overwhelming process if their partner doesn’t match up, but when ENTPs find someone who shares their love of intellectual exploration, watch out.'
			
}

movie4.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/WnXAl1ntt_4?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}



const movie5=document.getElementById('movie5');

infj.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	backagain.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie5.classList.remove('nothing');
	head.innerHTML='INFJ - The Advocate; Introvert, Intuitive, Feeling, Judging' + '<br/><br/>' + 'The INFJ personality type is very rare, making up less than one percent of the population, but they nonetheless leave their mark on the world. As Diplomats, they have an inborn sense of idealism and morality, but what sets them apart is the accompanying Judging (J) trait – INFJs are not idle dreamers, but people capable of taking concrete steps to realize their goals and make a lasting positive impact.'
				+ '<br/><br/>' + 'When it comes to romantic relationships, INFJs take the process of finding a partner seriously. Not ones for casual encounters, people with the INFJ personality type instead look for depth and meaning in their relationships. INFJs will take the time necessary to find someone they truly connect with – once they’ve found that someone, their relationships will reach a level of depth and sincerity that most people can only dream of.'
}

movie5.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/f8H0eegSTFo?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}



const movie6=document.getElementById('movie6');

enfj.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	backagain.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie6.classList.remove('nothing');
	head.innerHTML='ENFJ - The Protagonist; Extrovert, Intuitive, Feeling, Judging' + '<br/><br/>' + 'ENFJs are natural-born leaders, full of passion and charisma. Forming around two percent of the population, they are oftentimes our politicians, our coaches and our teachers, reaching out and inspiring others to achieve and to do good in the world. With a natural confidence that begets influence, ENFJs take a great deal of pride and joy in guiding others to work together to improve themselves and their community.'
				+ '<br/><br/>' + 'When it comes to love, ENFJ feel most at home when they are in a relationship, and few types are more eager to establish a loving commitment with their chosen partners. ENFJs take dating and relationships seriously, selecting partners with an eye towards the long haul, rather than the more casual approach that might be expected from some Explorer personality types. There’s really no greater joy for ENFJs than to help along the goals of someone they care about, and the interweaving of lives that a committed relationship represents is the perfect opportunity to do just that.'
}
movie6.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/OpPbGtMYUTM?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'	
	movieclose.classList.remove('nothing');
}





const movie7=document.getElementById('movie7');

infp.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie7.classList.remove('nothing');
	backagain.classList.remove('nothing');
	head.innerHTML='INFP - The Mediator; Introvert, Intuitive, Feeling, Perceiving' + '<br/><br/>' + 'INFP personalities are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better. While they may be perceived as calm, reserved, or even shy, INFPs have an inner flame and passion that can truly shine. Comprising just 4% of the population, the risk of feeling misunderstood is unfortunately high for the INFP personality type – but when they find like-minded people to spend their time with, the harmony they feel will be a fountain of joy and inspiration.'
				+ '<br/><br/>' + 'INFPs are dreamy idealists, and in the pursuit of the perfect relationship, this quality shows strongest. Never short on imagination, INFPs dream of the perfect relationship, forming an image of this pedestalled ideal that is their soul mate, playing and replaying scenarios in their heads of how things will be. This is a role that no person can hope to fill, and people with the INFP personality type need to recognize that nobody’s perfect, and that relationships don’t just magically fall into place – they take compromise, understanding and effort.'
}

movie7.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/77umP7IRxD4?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}





const movie8=document.getElementById('movie8');

enfp.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie8.classList.remove('nothing');
	backagain.classList.remove('nothing');
	head.innerHTML='ENFP - The Campaigner; Extrovert, Intuitive, Feeling, Perceiving' + '<br/><br/>' + 'The ENFP personality is a true free spirit. They are often the life of the party, but unlike Explorers, they are less interested in the sheer excitement and pleasure of the moment than they are in enjoying the social and emotional connections they make with others. Charming, independent, energetic and compassionate, the 7% of the population that they comprise can certainly be felt in any crowd.'
				+ '<br/><br/>' + 'When it comes to love, When it comes to relationships, there’s hardly anyone around who is more excited than ENFPs to share with their partners the bounty of ideas and eye-opening experiences that life has to offer. For people with the ENFP personality type, relationships are a joyous process of mutual exploration and imagination, a chance to connect with another soul. ENFPs take their relationships seriously, and are known for their uninhibited and unshakeable devotion to the people to whom they’ve committed their hearts.'
}
movie8.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/JCdQdFoFVUc?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}






const movie9=document.getElementById('movie9');

istj.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie9.classList.remove('nothing');
	backagain.classList.remove('nothing');
	head.innerHTML='ISTJ - The Logistician; Introvert, Sensing, Thinking, Judging' + '<br/><br/>' + 'The ISTJ personality type is thought to be the most abundant, making up around 13% of the population. Their defining characteristics of integrity, practical logic and tireless dedication to duty make ISTJs a vital core to many families, as well as organizations that uphold traditions, rules and standards, such as law offices, regulatory bodies and military. People with the ISTJ personality type enjoy taking responsibility for their actions, and take pride in the work they do – when working towards a goal, ISTJs hold back none of their time and energy completing each relevant task with accuracy and patience.'
				+ '<br/><br/>' + 'When it comes to love, ISTJs are dependable through and through, and this trait is clearly expressed when it comes to their romantic relationships. Often representing the epitome of family values, people with the ISTJ personality type are comfortable with, and often even encourage traditional household and gender roles, and look to a family structure guided by clear expectations and honesty. While their reserved nature often makes dating ISTJs challenging, they are truly dedicated partners, willing to devote tremendous thought and energy to ensure stable and mutually satisfying relationships.'
}
movie9.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/wxL8bVJhXCM?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}





const movie10=document.getElementById('movie10');

estj.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie.classList.remove('nothing');
	backagain.classList.remove('nothing');
	head.innerHTML='ESTJ - The Executive; Extrovert, Sensing, Thinking, Judging' + '<br/><br/>' + 'ESTJs are representatives of tradition and order, utilizing their understanding of what is right, wrong and socially acceptable to bring families and communities together. Embracing the values of honesty, dedication and dignity, people with the ESTJ personality type are valued for their clear advice and guidance, and they happily lead the way on difficult paths. Taking pride in bringing people together, ESTJs often take on roles as community organizers, working hard to bring everyone together in celebration of cherished local events, or in defense of the traditional values that hold families and communities together.'
				+ '<br/><br/>' + 'When it comes to love, ESTJs are fairly unique in that their relationships don\’t really change as they progress from the dating phase into more steady, long-term relationships and further into marriage. Because they value honesty and straightforwardness so highly, people with the ESTJ personality type are likely to be clear about who they are, what they’re like and what their goals are from the start, and to stick to those statements long-term. So long as their partner is able to take them at their word and follow suit, they are bound to be extremely stable relationships.'
}
movie10.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/N3xvr_ojJWE?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}




const movie11=document.getElementById('movie11');

isfj.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie11.classList.remove('nothing');
	backagain.classList.remove('nothing');
	head.innerHTML='ISFJ - The Defender; Introvert, Sensing, Feeling, Judging' + '<br/><br/>' + 'The ISFJ personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though possessing the Feeling (F) trait, ISFJs have excellent analytical abilities; though Introverted (I), they have well-developed people skills and robust social relationships; and though they are a Judging (J) type, ISFJs are often receptive to change and new ideas. As with so many things, people with the ISFJ personality type are more than the sum of their parts, and it is the way they use these strengths that defines who they are.'
				+ '<br/><br/>' + 'When it comes to romantic relationships, ISFJs\' kindness grows into a joy that is only found in taking care of their family and home, in being there for emotional and practical support whenever it’s needed. Home is where the heart is for people with the ISFJ personality type, and in no other area of their lives do they strive with such dedication to create the harmony and beauty they wish to see in the world.'
			
}
movie11.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/I9mJ2oBONug?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}





const movie12=document.getElementById('movie12');

esfj.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie12.classList.remove('nothing');
	backagain.classList.remove('nothing');
	head.innerHTML='ESFJ - The Consul; Extrovert, Sensing, Feeling, Judging' + '<br/><br/>' + 'People who share the ESFJ personality type are, for lack of a better word, popular – which makes sense, given that it is also a very common personality type, making up twelve percent of the population. In high school, ESFJs are the cheerleaders and the quarterbacks, setting the tone, taking the spotlight and leading their teams forward to victory and fame. Later in life, ESFJs continue to enjoy supporting their friends and loved ones, organizing social gatherings and doing their best to make sure everyone is happy.'
				+ '<br/><br/>' + 'When it comes to love, Prizing social validation and a sense of belonging so highly, romantic relationships hold a special level of importance for ESFJs. No other kind of relationship provides people with the ESFJ personality type with the same level of support and devotion, and the feelings of security and stability that come with strong romantic relationships are extremely warming.'
			
}
movie12.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/Ad3o3v2fWLY?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}





const movie13=document.getElementById('movie13');

istp.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie13.classList.remove('nothing');
	backagain.classList.remove('nothing');
	head.innerHTML='ISTP - The Virtuoso; Introvert, Sensing, Thinking, Perceiving' + '<br/><br/>' + 'ISTPs love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity. People with this personality type are natural Makers, moving from project to project, building the useful and the superfluous for the fun of it, and learning from their environment as they go. Often mechanics and engineers, ISTPs find no greater joy than in getting their hands dirty pulling things apart and putting them back together, just a little bit better than they were before.'
				+ '<br/><br/>' + 'When it comes to romantic relationships with ISTPs, it’s a bit like nailing Jell-O to a tree. Dating ISTP personalities is a tango, complex and interesting, with alternating coldness and detachment, and passion, spontaneity and enjoyment of the moment. Nothing can be forced in ISTP relationships, but so long as they are given the space they need to be themselves, they will gladly enjoy the comforts of a steady partner for a lifetime.'
			
}
movie13.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/FB7PU9ZcVms?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}




const movie14=document.getElementById('movie14');

estp.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie14.classList.remove('nothing');
	backagain.classList.remove('nothing');
	head.innerHTML='ESTP - The Entrepreneur; Extrovert, Sensing, Thinking, Perceiving' + '<br/><br/>' + 'ESTP personality types always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, ESTP personalities love to be the center of attention. If an audience member is asked to come on stage, ESTPs volunteer – or volunteer a shy friend.' +
					+ '<br/><br/>' + 'When it comes to romantic relationships, people with the ESTP personality type can hardly be said to be pining away for their wedding day. Life is fun and full of surprises (something ESTPs have particular skill in delivering), and they enjoy it all in the here and now. ESTPs may not spend a lot of time planning for "someday", but their enthusiasm and unpredictability make them thrilling dating partners.'

}
movie14.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/1JG6f5_37tg?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}




const movie15=document.getElementById('movie15');

isfp.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	movie15.classList.remove('nothing');
	backagain.classList.remove('nothing');
	head.innerHTML='ISFP - The Adventurer; Introvert, Sensing, Feeling, Perceiving' + '<br/><br/>' + 'ISFP personality types are true artists, but not necessarily in the typical sense where they’re out painting happy little trees. Often enough though, they are perfectly capable of this. Rather, it’s that they use aesthetics, design and even their choices and actions to push the limits of social convention. ISFPs enjoy upsetting traditional expectations with experiments in beauty and behavior – chances are, they’ve expressed more than once the phrase \'Don’t box me in!\''
				+ '<br/><br/>' + 'When it comes to love, ISFPs are quite mysterious and difficult to get to know. While very emotional individuals, they guard this sensitive core carefully, preferring to listen than to express. People with the ISFP personality type focus instead on their partners, with little interest in dictating the mood of a situation with their own feelings. While this can sometimes be frustrating, if they are accepted for who they are, ISFPs prove to be warm, enthusiastic partners.'
			
}
movie15.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/YL_90r0J120?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}




const movie16=document.getElementById('movie16');

esfp.onclick= function() {
	event.preventDefault()
	thirdpage.classList.remove('nothing');
	text.classList.remove('nothing');
	movie16.classList.remove('nothing');

	overlay.classList.remove('nothing');
	overlay2.classList.remove('nothing');
	console.log("back")
	backagain.classList.remove('nothing');
	head.innerHTML='ESFP - The Entertainer; Extrovert, Sensing, Feeling, Perceiving' + '<br/><br/>' + 'If anyone is to be found spontaneously breaking into song and dance, it is the ESFP personality type. ESFPs get caught up in the excitement of the moment, and want everyone else to feel that way, too. No other personality type is as generous with their time and energy as ESFPs when it comes to encouraging others, and no other personality type does it with such irresistible style.'
				+ '<br/><br/>' + 'When it comes to love, ESFPs are social, fun-loving, free-spirited people who live life in the moment and squeeze every little bit of excitement from everything. Naturally, they don\'t spare any of this freshness and energy when dating. For people with the ESFP personality type, relationships aren’t about slowly building foundations for the future, or planning out a life – they are bubbling, unpredictable things to be enjoyed for as long as there\'s enjoyment to be had.'
			
}
movie16.onclick= function() {
	event.preventDefault();
	lightbox.classList.remove('nothing');
	lightbox.innerHTML='<iframe width="720" height="400" src="https://www.youtube.com/embed/0Q_9ay7kG7s?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
	movieclose.classList.remove('nothing');
}




backbutton.onclick= function() {

	event.preventDefault();

	textbubble.classList.remove('nothing');
	overlayerTwo.classList.remove('nothing');
	button.classList.remove('nothing');
	endtitle.classList.remove('nothing');

	choco.classList.add('nothing');
	overlayerThree.classList.add('nothing');
	clicked.classList.add('nothing');
	
	intj.classList.add('nothing');
	entj.classList.add('nothing');
	intp.classList.add('nothing');
	entp.classList.add('nothing');
	infj.classList.add('nothing');
	enfj.classList.add('nothing');
	infp.classList.add('nothing');
	enfp.classList.add('nothing');

	istj.classList.add('nothing');
	estj.classList.add('nothing');
	isfj.classList.add('nothing');
	esfj.classList.add('nothing');
	istp.classList.add('nothing');
	estp.classList.add('nothing');
	isfp.classList.add('nothing');
	esfp.classList.add('nothing');

	backbutton.classList.add('nothing');
	
	}

backagain.onclick= function() {
	event.preventDefault();

	thirdpage.classList.add('nothing');
	backagain.classList.add('nothing');
	text.classList.add('nothing');
	// source.classList.add('nothing');
	console.log("hide")
	overlay.classList.add('nothing');
	overlay2.classList.add('nothing');
	
	movie.classList.add('nothing');
	movie.classList.add('nothing');
	movie2.classList.add('nothing');
	movie3.classList.add('nothing');
	movie4.classList.add('nothing');
	movie5.classList.add('nothing');
	movie6.classList.add('nothing');
	movie7.classList.add('nothing');
	movie8.classList.add('nothing');
	movie9.classList.add('nothing');
	movie10.classList.add('nothing');
	movie11.classList.add('nothing');
	movie12.classList.add('nothing');
	movie13.classList.add('nothing');
	movie14.classList.add('nothing');
	movie15.classList.add('nothing');
	movie16.classList.add('nothing');


}

movieclose.onclick= function() {
	event.preventDefault();
	lightbox.classList.add('nothing');
	movieclose.classList.add('nothing');

}
	

