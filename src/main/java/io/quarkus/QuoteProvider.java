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
	public void setInspirationQuotes() {
		inspirationQuotes.put(1, "Inspiration quote goes here.");
		inspirationQuotes.put(2, "Inspiration quote goes here.");
		inspirationQuotes.put(3, "If you know the why and the how, you will probably figure out the what.    - Ada Lovelace");
		inspirationQuotes.put(4, "The early digital pioneers were able to conceive of something that didn’t yet exist because they were possessed of something we often only ascribe to artists: imagination.  - Ada Lovelace");
		inspirationQuotes.put(5, "Scientists say that human beings are made of atoms, but a little bird told me that we are also made of stories. \n - Eduardo Galeano.");
		inspirationQuotes.put(6, "A single moment can change a life forever.\n - Gabriel García Márquez, one hundred years of solitude");
		inspirationQuotes.put(7, "The key to happiness is acceptance. \n - Gabriel García Márquez, one hundred years of solitude");
		inspirationQuotes.put(8, "You cannot insult a man more atrociously than by refusing to believe he his suffering. \n - Cesare Pavese, il mestiere di vivere");
		inspirationQuotes.put(9, "I am not particularly interested in saving time; I prefer to enjoy it. \n - Eduardo Galeano.");
		inspirationQuotes.put(10, "Inspiration quote goes here.");
		inspirationQuotes.put(11, "Inspiration quote goes here.");
	}
	public void setMotivationQuotes() {
		motivationQuotes.put(1, "In a crisis, give help first and then advice. \n   - Aesop");
		motivationQuotes.put(2, "Curiosity is one of the many masks of love. \n   - Gabriel García Márquez");
		motivationQuotes.put(3, "Many small people, in small places, doing small things can change the world.\n   - Eduardo Galeano.");
		motivationQuotes.put(4, "Motivation quote goes here.");
		motivationQuotes.put(5, "Motivation quote goes here.");
		motivationQuotes.put(6, "Motivation quote goes here.");
		motivationQuotes.put(7, "Motivation quote goes here.");
		motivationQuotes.put(8, "Motivation quote goes here.");
		motivationQuotes.put(9, "Motivation quote goes here.");
		motivationQuotes.put(10, "Motivation quote goes here.");
		motivationQuotes.put(11, "Motivation quote goes here.");
	}
	public void setLoveQuotes() {
		loveQuotes.put(1, "The heart does not understand reason. \nIt follows its own mysterious path. \n   -  Fyodor Dostoevsky, The White Nights");
		loveQuotes.put(2, "You will be loved the day when you will be able to show your weakness without the other person using it to assert is strenght.  \nCesare Pavese, Il Mestiere di vivere");
		loveQuotes.put(3, "So we grew together, \nLike to a double cherry, \nseeming parted, \nBut yet an union in partition, \nTwo lovely berries moulded \n on one stem. \n  - William Shakespear, A Midsummer Night's Dream");
		loveQuotes.put(4, "Love me or hate me \nboth are in my favor \n for if you love me \nI will always be in your heart \nif you hate me \n I will always be in your mind \n  - William Shakespeare");
		loveQuotes.put(5, "No act of kindness, no matter how small, is ever wasted. \n - Aesop");
		loveQuotes.put(6, "Love is never lost; it only changes form.\n - Gabriel García Márquez, one hundred years of solitude");
		loveQuotes.put(7, "It's enough for me to be sure that you and I exist at this moment.\n - Gabriel García Márquez, one hundred years of solitude");
		loveQuotes.put(8, "There is always something left to love.\n - Gabriel García Márquez, one hundred years of solitude.");
		loveQuotes.put(9, "Love quote goes here.");
		loveQuotes.put(10, "Love quote goes here.");
		loveQuotes.put(11, "Love quote goes here.");
	}
	public void setRevolutionQuotes() {
		revolutionQuotes.put(1, "Revolution quote goes here.");
		revolutionQuotes.put(2, "I’m not a fan of nostalgia. I’m a fan of the future. \n - Lou Reed");
		revolutionQuotes.put(3, "Conformity is the last refuge of the unimaginitive. \n - Oscar Wilde");
		revolutionQuotes.put(4, "Better to starve free than be a fat slave. \n - Aesop");
		revolutionQuotes.put(5, "Always stop to think wheter your fun may be the cause of another's unhappiness. \n - Aesop");
		revolutionQuotes.put(6, "One must learn to overcome fear in order to be truly free.\n - Gabriel García Márquez, one hundred years of solitude");
		revolutionQuotes.put(7, "Exil quote goes here.");
		revolutionQuotes.put(8, "Love quote goes here.");
		revolutionQuotes.put(9, "Love quote goes here.");
		revolutionQuotes.put(10, "Love quote goes here.");
		revolutionQuotes.put(11, "Love quote goes here.");
	}
	public void setGoodNightQuotes() {
		goodNightQuotes.put(1, "Without a goal, life has no meaning.\n - Emil Cioran");
		goodNightQuotes.put(2, "Don't struggle so much, the best things happens when less expected. \n - Gabriel García Márquez ");
		goodNightQuotes.put(3, "Dreams are the fragile whispers of our hearts, \nguiding us towards what we desire most. \n.  - Fyodor Dostoevsky -  The White Nights.");
		goodNightQuotes.put(4, "To philosophize is to learn how to die. - Emil Cioran.");
		goodNightQuotes.put(5, "To live is to suffer, to survive is to find some meaning in the suffering. \n- Friedrich Nietzsche");
		goodNightQuotes.put(6, "We have exiled beauty; the Greeks took up arms for her. \\n- Albert Camus");
		goodNightQuotes.put(7, "A dreamer is someone that find is one who can only find his way by moonlight. \n  - Oscar Wilde");
		goodNightQuotes.put(8, "Love quote goes here.");
		goodNightQuotes.put(9, "Love quote goes here.");
		goodNightQuotes.put(10, "Love quote goes here.");
		goodNightQuotes.put(11, "Love quote goes here.");
	}
	public void setExilQuotes() {
		exilQuotes.put(1, "Without a goal, life has no meaning.\n - Emil Cioran.");
		exilQuotes.put(2, "Each person must discover his own philosophy of life, and it's not fair or right to impose our codes upon others.\nIt is also our responsibility,\nhowever, to share one with another, such expieriences as may have \ncommon value. - \nManly P. Hall. ");
		exilQuotes.put(3, "The heart does not understand reason. \nIt follows its own mysterious path. \n -  Fyodor Dostoevsky -  The White Nights");
		exilQuotes.put(4, "To philosophize is to learn how to die. \n- Emil Cioran");
		exilQuotes.put(5, "To live is to suffer, to survive is to find some meaning in the suffering. \n- Friedrich Nietzsche.");
		exilQuotes.put(6, "We have exiled beauty; the Greeks took up arms for her. \n- Albert Camus.");
		exilQuotes.put(7, "Dream in a pragmatic way.  \n- Aldous Huxley");
		exilQuotes.put(8, "It's alright to be sad sometimes because sadness can open new ways of thinking. \n - Gabriel García Márquez, one hundred years of solitude.");
		exilQuotes.put(9, "Love quote goes here.");
		exilQuotes.put(10, "Love quote goes here.");
		exilQuotes.put(11, "Love quote goes here.");
	}
	public void setChangeQuotes() {
		changeQuotes.put(1, "“What am I doing here in this endless winter? ― Franz Kafka, The Metamorphosis and Other Stories.");
		changeQuotes.put(2, "Too much sanity may be madness, and the maddest of all, to see life as it is and not as it should be. - Emil Cioran.");
		changeQuotes.put(3, "It is in vain to expect our prayers to be heard,if we do not strive as well as pray. - Aesop, Fables");
		changeQuotes.put(4, "With my music, I create change…I am using my music as a weapon. \n - Fela Kuti");
		changeQuotes.put(5, "To live is to suffer, to survive is to find some meaning in the suffering. - Friedrich Nietzsche.");
		changeQuotes.put(6, "To be spiritual is not by praying and going to church. Spiritualism is the understanding of the universe so that it can be a better place to live in. \n - Fela Kuti.");
		changeQuotes.put(7, "Things have a life of their own,\" the gypsy proclaimed with a harsh accent. \"It's simply a matter of waking up their souls. \n -  - Gabriel García Márquez, one hundred years of solitude");
		changeQuotes.put(8, "Love quote goes here.");
		changeQuotes.put(9, "Love quote goes here.");
		changeQuotes.put(10, "Love quote goes here.");
		changeQuotes.put(11, "Love quote goes here.");
	}
	public void setDreamQuotes() {
		dreamQuotes.put(1, "“What am I doing here in this endless winter? ― Franz Kafka, The Metamorphosis and Other Stories.");
		dreamQuotes.put(2, "Too much sanity may be madness, and the maddest of all, to see life as it is and not as it should be. - Emil Cioran.");
		dreamQuotes.put(3, "Exil quote goes here.");
		dreamQuotes.put(4, "Exil quote goes here.");
		dreamQuotes.put(5, "To live is to suffer, to survive is to find some meaning in the suffering. - Friedrich Nietzsche.");
		dreamQuotes.put(6, "We have exiled beauty; the Greeks took up arms for her. - Albert Camus.");
		dreamQuotes.put(7, "Love quote goes here.");
		dreamQuotes.put(8, "Love quote goes here.");
		dreamQuotes.put(9, "Love quote goes here.");
		dreamQuotes.put(10, "Love quote goes here.");
		dreamQuotes.put(11, "Love quote goes here.");
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
		case "good night":
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
		return Response.ok( new Quote(randomId, randomQuote)).build();
	}





	}}

