package io.quarkus;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.*;



@Path("/moods")
public class QuoteProvider {

	private static Map<Integer, String>inspirationQuotes=new HashMap<>();
	private static Map<Integer, String>motivationQuotes=new HashMap<>();
	private static Map<Integer, String>loveQuotes=new HashMap<>();
	private static Map<Integer, String>revolutionQuotes=new HashMap<>();
	private static Map<Integer, String>exilQuotes=new HashMap<>();
	private static Map<Integer, String>changeQuotes=new HashMap<>();
	private static Map<Integer, String>goodNightQuotes=new HashMap<>();
	private static Map<Integer, String>dreamQuotes=new HashMap<>();
	private static Set authors;
	public static Map<Integer,String>inspirationQuotes(){
		return inspirationQuotes;
	}
	public static Map<Integer,String>motivationQuotes(){
		return motivationQuotes;
	} 
	public static Map<Integer,String>loveQuotes(){
		return loveQuotes;
	} 
	public static Map<Integer,String>goodNightQuotes(){
		return goodNightQuotes;
	}
	public static Map<Integer,String>revolutionQuotes(){
		return revolutionQuotes;
	} 
	public static Map<Integer,String>exilQuotes(){
		return exilQuotes;
	}
	public static Map<Integer,String>changeQuotes(){
		return changeQuotes;
	}
	public static Map<Integer,String>dreamQuotes(){
		return dreamQuotes;
	}
	public void setAuthors() {
		String []auth={"Ada Lovelace","Aldous Huxley", "Aesop", "bell hooks", "Cesare Pavese", "Eduardo Galeano", "Emil Cioran" , "Fela Kuti", "Fyodor Dostoevsky", "Gabriel García Márquez","Lou Reed", "Manly P. Hall", "Oscar Wylde", "Octavia E. Butler", "Rudolf Steiner", "William Shakespeare"};
		List<String> auths = Arrays.asList(auth);
		authors = new HashSet<>(auths);

	}
	public void setInspirationQuotes() {
		inspirationQuotes.put(1, "Artists, poets, music-makers: all have the gift of seeing how general principles might be applied to all the senses.\n \n   - Ada Lovelace");
		inspirationQuotes.put(2, "Kindness is more persuasive than force.\n \n   - Aesop.");
		inspirationQuotes.put(3, "If you know the why and the how, you will probably figure out the what. \n\n   - Ada Lovelace");
		inspirationQuotes.put(4, "The early digital pioneers were able to conceive of something that didn’t yet exist because they were possessed of something we often only ascribe to artists: imagination.\n \n   - Ada Lovelace");
		inspirationQuotes.put(5, "Scientists say that human beings are made of atoms, but a little bird told me that we are also made of stories. \n\n - Eduardo Galeano.");
		inspirationQuotes.put(6, "A single moment can change a life forever. \n \n - Gabriel García Márquez, One hundred years of solitude");
		inspirationQuotes.put(7, "The key to happiness is acceptance. \n - Gabriel García Márquez, One hundred years of solitude");
		inspirationQuotes.put(8, "You cannot insult a man more atrociously than by refusing to believe he his suffering.\n \n - Cesare Pavese, Il mestiere di vivere");
		inspirationQuotes.put(9, "I am not particularly interested in saving time; I prefer to enjoy it. \n\n   - Eduardo Galeano.");
		inspirationQuotes.put(10, "To be free is to be capable of thinking one's own thoughts - not the thoughts merely of the body, or of society, but thoughts generated by one's deepest, most original, most essential and spiritual self, one's individuality. \n    - Rudolf Steiner.");
		inspirationQuotes.put(11, "What is imagination?...It is a God-like, a noble faculty. It renders earth tolerable, it teaches us to live, in the tone of the eternal.  \n\n   - Ada Lovelace");
		inspirationQuotes.put(12, "The secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm.\n \n - Aldous Huxley");
		inspirationQuotes.put(13, "How dull is to have people defining you. \n \n - Octavia E. Butler");
		inspirationQuotes.put(14, "No medicine cures what happiness cannot.\n \n - Gabriel García Márquez");
		inspirationQuotes.put(15, "The function of art is to do more than tell it like it is-it’s to imagine what is possible.. \n\n  - bell hooks");
	}
	public void setMotivationQuotes() {
		motivationQuotes.put(1,  "In a crisis, give help first and then advice. \n\n   - Aesop");
		motivationQuotes.put(2,  "Curiosity is one of the many masks of love. \n\n   - Gabriel García Márquez");
		motivationQuotes.put(3,  "Many small people, in small places, doing small things can change the world. \n\n   - Eduardo Galeano.");
		motivationQuotes.put(4,  "Experiences are the chemicals of life with which the philosopher experiments \n \n  - Manly P. Hall.");
		motivationQuotes.put(5,  "Besides, nowadays, almost all capable people are terribly afraid of being ridiculous, and are miserable because of it.\n \n   -  Fyodor Dostoevsky, The Brothers Karamazov");
		motivationQuotes.put(6,  "To be well prepared for war is the best guarantee of peace. \n \n  - Aesop.");
		motivationQuotes.put(7,  "In the midst of winter, I found there was, within me, an invincible summer. And that makes me happy. For it says that no matter how hard the world pushes against me, within me, there’s something stronger – something better, pushing right back.\n \n ― Albert Camus.");
		motivationQuotes.put(8,  "The secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm. \n\n - Aldous Huxley");
		motivationQuotes.put(9,  "The higher we soar the smaller we appear to those who cannot fly. \n\n    - Friedrich Nietzsche, Thus spoke Zarathustra");
		motivationQuotes.put(10, "Those who hear not the music think the dancers mad. \n\n    - Friedrich Nietzsche, Thus spoke Zarathustra");
		motivationQuotes.put(11, "Life is hard to bear: but do not pretend to be so delicate! \n \n   - Friedrich Nietzsche, Thus spoke Zarathustra");
		motivationQuotes.put(12, "Life had already given him sufficient reasons for knowing that no defeat was the final one.\n \n  - Gabriel García Márquez, The general in is labyrinth");
		motivationQuotes.put(13, "The big talent is persistence. \n \n   - Octavia E. Butler");
		motivationQuotes.put(14, "If I could recover from that, God must have something in mind for me. \n \n   - Octavia E. Butler");
		motivationQuotes.put(15, "Those who hear not the music think the dancers mad. \n\n    - Friedrich Nietzsche, Thus spoke Zarathustra");
		motivationQuotes.put(16, "Nobody deserves your tears, but whoever deserves them will not make you cry. \n \n   - Gabriel García Márquez");
	}
	public void setLoveQuotes() {
		loveQuotes.put(1, "The heart does not understand reason. \nIt follows its own mysterious path. \n\n -  Fyodor Dostoevsky, The White Nights");
		loveQuotes.put(2, "You will be loved the day when you will be able to show your weakness without the other person using it to assert is strenght. \n \n  - Cesare Pavese, Il Mestiere di vivere");
		loveQuotes.put(3, "So we grew together, \nLike to a double cherry, \nseeming parted, \nBut yet an union in partition, \nTwo lovely berries moulded \n on one stem.\n \n  - William Shakespeare, A Midsummer Night's Dream");
		loveQuotes.put(4, "Love me or hate me \nboth are in my favor \n for if you love me \nI will always be in your heart \nif you hate me \n I will always be in your mind \n\n   - William Shakespeare");
		loveQuotes.put(5, "No act of kindness, no matter how small, is ever wasted.\n \n - Aesop");
		loveQuotes.put(6, "Love is never lost; it only changes form.\n\n - Gabriel García Márquez, One hundred years of solitude");
		loveQuotes.put(7, "It's enough for me to be sure that you and I exist at this moment.\n\n - Gabriel García Márquez, One hundred years of solitude");
		loveQuotes.put(8, "There is always something left to love.\n\n - Gabriel García Márquez, One hundred years of solitude.");
		loveQuotes.put(9, "What is hell? I maintain that it is the suffering of being unable to love. \n \n  -  Fyodor Dostoevsky, The Brothers Karamazov");
		loveQuotes.put(10, "Anybody can sympathize with the sufferings of a friend, but it requires a very fine nature to sympathize with a friend’s success. \n \n - Oscar Wilde");
		loveQuotes.put(11, "Love is an action, never simply a feeling. \n \n  - bell hooks");
		loveQuotes.put(12, "To love somebody is not just a strong feeling - it's a decision, it's a judgement, it's a promise.  \n   - bell hooks, All about love: New Visions");
		loveQuotes.put(13, "She discovered with great delight that one does not love one's children \n just because they are one's children \n but because of the friendship formed while raising them \n\n    - Gabriel García Márquez, Love in time of cholera");
		loveQuotes.put(14, "Le dijo que el amor era un sentimiento contra natura, que condenaba a dos desconocidos a una dependencia mezquina e insalubre, tanto más efímera cuanto más intensa. \n   - Gabriel García Márquez, Del amor y otros demonios");
		loveQuotes.put(15, "The weak would never enter the kingdom of love.\n \n   - Gabriel García Márquez, Love in time of cholera");
		loveQuotes.put(16, "I don’t know how to be silent when my heart is speaking. \n\n   - Fyodor Dostoevsky, The White Nights");
	}
	public void setRevolutionQuotes() {
		revolutionQuotes.put(1, "Oh! I hate the cheap severity of abstract ethics.  \n\n - Oscar Wilde, The Canterville Ghost");
		revolutionQuotes.put(2, "I’m not a fan of nostalgia. I’m a fan of the future. \n\n - Lou Reed");
		revolutionQuotes.put(3, "Conformity is the last refuge of the unimaginitive.\n \n - Oscar Wilde");
		revolutionQuotes.put(4, "Better to starve free than be a fat slave. \n\n - Aesop");
		revolutionQuotes.put(5, "Always stop to think wheter your fun may be the cause of another's unhappiness. \n\n - Aesop");
		revolutionQuotes.put(6, "One must learn to overcome fear in order to be truly free.\n\n - Gabriel García Márquez, One hundred years of solitude");
		revolutionQuotes.put(7, "The tyrant will always find a pretext for his tyranny. \n\n  - Aesop");
		revolutionQuotes.put(8, "You can never be overdressed or overeducated. \n \n  - Oscar Wilde");
		revolutionQuotes.put(9, "I don't tell lies about anybody. That's why i win all my wars. \n\n  - Fela Kuti.");
		revolutionQuotes.put(10, "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. \n\n   - Albert Camus");
		revolutionQuotes.put(11, "There can be no love without justice.  \n\n  - bell hooks");
		revolutionQuotes.put(12, "We are encouraged to see honest people as naive, as potential losers. \n\n  - bell hooks");
		revolutionQuotes.put(13, "Always forgive your enemies, nothing annoys them so much. \n\n  - Oscar Wilde");
		revolutionQuotes.put(14, "One accurate measurement is worth a thousand expert opinions. \n\n    - Grace Hopper");
		revolutionQuotes.put(15, "A ship in port is safe, but that's not what ships are built for. \n\n   - Grace Hopper");
		revolutionQuotes.put(16, "How could I tell a complication from the general run of misery? \n - Octavia E. Butler, Parable of the Talents");
		revolutionQuotes.put(17, "Actual happiness always looks pretty squalid in comparison with the over-compensations for misery. \n\n - Aldous Huxley, Brave New World");
	}
	public void setGoodNightQuotes() {
		goodNightQuotes.put(1, "Without a goal, life has no meaning. \n    - Emil Cioran");
		goodNightQuotes.put(2, "Don't struggle so much, the best things happens when less expected. \n - Gabriel García Márquez ");
		goodNightQuotes.put(3, "Dreams are the fragile whispers of our hearts, guiding us towards what we desire most. \n.  - Fyodor Dostoevsky,  The White Nights");
		goodNightQuotes.put(4, "I have always struggled, with the sole intention of ceasing to struggle. Result: zero.  \n \n   - Emil Cioran, Drawn and quartered");
		goodNightQuotes.put(5, "The Mercurial person must take careful stock of himself and make sure that he contributes nothing to the inanities of the day. \n \n - Manly P. Hall");
		goodNightQuotes.put(6, "I want peace. Happiness. Not only for myself. For everybody.\n \n   - Fela Kuti");
		goodNightQuotes.put(7, "A dreamer is someone that find is one who can only find his way by moonlight.\n \n  - Oscar Wilde");
		goodNightQuotes.put(8, "It takes great deal of courage to see the world in all its tainted glory, and still to love it.  \n  - Oscar Wilde");
		goodNightQuotes.put(9, "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.  \n -  Fyodor Dostoevsky, The brothers Karamazov");
		goodNightQuotes.put(10, "No matter what, nobody can take away the dances you've already had.\n \n - Gabriel García Márquez, Memories of my melancholy whores");
		goodNightQuotes.put(11, "Sometimes people try to destroy you, precisely because they recognize your power — not because they don’t see it, but because they see it and they don’t want it to exist. \n\n - Bell Hooks");
		goodNightQuotes.put(12,"Good night, good night! Parting is such sweet sorrow; That I shall say good night till it be morrow.\n\n- William Shakespeare, Romeo and Juliet");
	}
	public void setExilQuotes() {
		exilQuotes.put(1, "Without a goal, life has no meaning.\n \n - Emil Cioran.");
		exilQuotes.put(2, "Each person must discover his own philosophy of life, and it's not fair or right to impose our codes upon others.\nIt is also our responsibility, however, to share one with another, such expieriences as may have common value. \n\n   - Manly P. Hall. ");
		exilQuotes.put(3, "The heart does not understand reason. \nIt follows its own mysterious path. \n\n -  Fyodor Dostoevsky -  The White Nights");
		exilQuotes.put(4, "To philosophize is to learn how to die.\n \n - Emil Cioran");
		exilQuotes.put(5, "The secret of life is to have no fear. \n\n - Fela Kuti");
		exilQuotes.put(6, "We have exiled beauty; the Greeks took up arms for her.\n \n- Albert Camus");
		exilQuotes.put(7, "Dream in a pragmatic way. \n \n - Aldous Huxley");
		exilQuotes.put(8, "It's alright to be sad sometimes because sadness can open new ways of thinking.\n \n - Gabriel García Márquez, one hundred years of solitude.");
		exilQuotes.put(9, "In order to understand the world, one has to turn away from it on occasion. \n\n- Albert Camus, the myth of Sisyphos");
		exilQuotes.put(10, "The more powerful and original a mind, the more it will incline towards the religion of solitude.\n \n  - Aldous Huxley");
		exilQuotes.put(11, "... and those arm-chair anarchists who have theoretical explanations for every circumstance of living. The Mercurial person must take careful stock of himself and make sure that he contributes nothing to the inanities of the day. \n\n  - Manly P. Hall");
		exilQuotes.put(12, "You must be ready to burn yourself in your own flame; how could you rise anew if you have not first become ashes?\n \n    - Friedrich Nietzsche, Thus spoke Zarathustra");
		exilQuotes.put(13, "Melancholy: an appetite no misery satisfies.\n \n - Emil Cioran, All Gall is divided");
	}
	public void setChangeQuotes() {
		changeQuotes.put(1, "“What am I doing here in this endless winter? \n \n― Franz Kafka, The Metamorphosis and Other Stories.");
		changeQuotes.put(2, "Too much sanity may be madness, and the maddest of all, to see life as it is and not as it should be. \n \n    - Emil Cioran.");
		changeQuotes.put(3, "It is in vain to expect our prayers to be heard,if we do not strive as well as pray. \n\n  - Aesop, Fables");
		changeQuotes.put(4, "With my music, I create change… I am using my music as a weapon.\n \n - Fela Kuti");
		changeQuotes.put(5, "To live is to suffer, to survive is to find some meaning in the suffering. \n \n     - Friedrich Nietzsche");
		changeQuotes.put(6, "To be spiritual is not by praying and going to church. Spiritualism is the understanding of the universe so that it can be a better place to live in.\n \n - Fela Kuti.");
		changeQuotes.put(7, "Things have a life of their own,\" the gypsy proclaimed with a harsh accent. \"It's simply a matter of waking up their souls.\n \n    - Gabriel García Márquez, One hundred years of solitude");
		changeQuotes.put(8, "Most people are other people. Their thoughts are someone else’s opinions, their lives a mimicry, their passions a quotation.\n \n  - Oscar Wilde");
		changeQuotes.put(9, "You will burn and you will burn out; you will be healed and come back again. \n \n -  Fyodor Dostoevsky, the brothers Karamazov");
		changeQuotes.put(10, "In the depth of winter, I finally learned that within me there lay an invincible summer. \n \n  - Albert Camus.");
		changeQuotes.put(11, "It is a bit embarrassing to have been concerned with the human problem all one's life and find at the end that one has no more to offer by way of advice than 'Try to be a little kinder.\n \n   -  Aldous Huxley");
		changeQuotes.put(12, "All our silences in the face of racist assault are acts of complicity.\n \n -  Bell Hooks, end of racism");
		changeQuotes.put(13, "Wisdom is given to no man until he asks for it, for in Nature every creature is accorded the privilege of unfolding its own destiny.\n \n  - Manly P. Hall, a treatise on esoteric ethic");
		changeQuotes.put(14, "Melancholy: an appetite no misery satisfies.\n \n - Emil Cioran, All Gall is divided");
		changeQuotes.put(15, "One accurate measurement is worth a thousand expert opinions.\n \n  - Grace Hopper");
		changeQuotes.put(16, "The only phrase I've ever disliked is, 'Why, we've always done it that way.' I always tell young people, 'Go ahead and do it. You can always apologize later.'\n \n - Grace Hopper");
		changeQuotes.put(17, "Los seres humanos no nacen para siempre el día en que sus madres los alumbran, sino que la vida los obliga a parirse a sí mismos una y otra vez.\n \n - Gabriel García Márquez, El coronel no tiene a quien le escriba");
	}
	public void setDreamQuotes() {
		dreamQuotes.put(1, "- La ilusión no se come - dijo ella.\r\n"+ "- No se come, pero alimenta - replicó el coronel.\n \n - Gabriel García Márquez, El coronel no tiene a quien le escriba");
		dreamQuotes.put(2, "Too much sanity may be madness, and the maddest of all, to see life as it is and not as it should be.\n \n   - Emil Cioran.");
		dreamQuotes.put(3, "It is not true that people stop pursuing dreams because they grow old, they grow old because they stop pursuing dreams.\n \n - Gabriel García Márquez, Memories of my melancholy whores");
		dreamQuotes.put(4, "Dream in a pragmatic way. \n \n - Aldous Huxley.");
		dreamQuotes.put(5, "The dreamer, if you want an exact definition, is not a human being, but a creature of an intermediate sort.\n\n - Fyodor Dostoevsky,  The White Nights");
		dreamQuotes.put(6, "I go to seek a great perhaps. \n \n - Gabriel García Márquez, The general in his labyrinth");
		dreamQuotes.put(7, "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.  \n -  Fyodor Dostoevsky, the brothers Karamazov");
		dreamQuotes.put(8, "and what shall I have to dream of when I have been so happy in reality beside you!\n \n - Fyodor Dostoevsky,  The White Nights");
		dreamQuotes.put(9, "It seems that she doubted herself from time to time, but she never doubted the dream. \n\n - Octavia E. Butler, Parable of the Talents");
		dreamQuotes.put(10, "The very substance of the ambitious is merely the shadow of a dream.\n\n - William Shakespeare, Hamlet");
		
	}
	public String getAuthor(String text) {
		List<String> auth = new ArrayList<>(authors);
		String[] auths = auth.toArray(new String[0]);
		for (String author : auths) {
			if (text.toLowerCase().contains(author.toLowerCase())) {
				return author;  // Return the matched author
			}
		}

		return "unknown";  
	}

	@GET
	@Path("/{mood}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response  getQuote(@PathParam("mood")String mood) { {
		Random rand = new Random();
		Map<Integer, String> selectedQuotes;

		switch (mood.toLowerCase()) {
		case "inspiration":
			selectedQuotes = inspirationQuotes();

			break;
		case "motivation":
			selectedQuotes = motivationQuotes();
			break;
		case "revolution":
			selectedQuotes = revolutionQuotes();

		case "love":
			selectedQuotes = loveQuotes();
			break;

		case "exil":
			selectedQuotes = exilQuotes();
			break;

		case "change":
			selectedQuotes = changeQuotes();
			break;
		case "good-night":
			selectedQuotes = goodNightQuotes();

		case "dream":
			selectedQuotes = dreamQuotes();
			break;

		default:
			return Response.status(Response.Status.NOT_FOUND)
					.entity("Mood not found :((").build();
		}


		int size = selectedQuotes.size();
		if (size == 0) {
			return Response.status(Response.Status.NO_CONTENT).build();
		}

		int randomId = rand.nextInt(size) + 1; // Generate a random number based on the size of the quotes
		String randomQuote = selectedQuotes.get(randomId);
		String author = getAuthor(randomQuote);
		return Response.ok( new Quote(randomId, randomQuote, author)).build();
	}





	}}

