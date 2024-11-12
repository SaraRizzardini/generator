package io.quarkus;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Set;
import jakarta.inject.Singleton;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import io.quarkus.QuoteProvider;

@Path("/moods")
public class MoodsResource {

	@Singleton
	@GET
	public Set<Mood> getMoods() {
		QuoteProvider quoteProvider = new QuoteProvider();
		quoteProvider.setInspirationQuotes();
		quoteProvider.setMotivationQuotes();
		quoteProvider.setLoveQuotes();
        quoteProvider.setRevolutionQuotes();
        quoteProvider.setExilQuotes();
        quoteProvider.setChangeQuotes();
        quoteProvider.setGoodNightQuotes();
        quoteProvider.setDreamQuotes();
        quoteProvider.setAuthors();
		Set <Mood> moods = Collections.newSetFromMap(Collections.synchronizedMap(new LinkedHashMap<>()));

		Mood inspiration = new Mood();
		inspiration.setName("Inspiration");
		inspiration.setQuotes(QuoteProvider.inspirationQuotes());
		moods.add(inspiration);
		
		
		Mood love = new Mood();
		love.setName("Love");
		love.setQuotes(QuoteProvider.loveQuotes());
		moods.add(love);


		Mood change = new Mood();
		change.setName("Change");
		change.setQuotes(QuoteProvider.changeQuotes());
		moods.add(change);
		
		Mood dream = new Mood();
		dream.setName("Dream");
		dream.setQuotes(QuoteProvider.dreamQuotes());
		moods.add(dream);
		
		Mood exil = new Mood();
		exil.setName("Exil");
		exil.setQuotes(QuoteProvider.exilQuotes());
		moods.add(exil);
		
		Mood goodNight = new Mood();
		goodNight.setName("Good-night");
		goodNight.setQuotes(QuoteProvider.goodNightQuotes());
		moods.add(goodNight);
		
		Mood motivation = new Mood();
		motivation.setName("Motivation");
		motivation.setQuotes(QuoteProvider.motivationQuotes());
		moods.add(motivation);

		Mood revolution = new Mood();
		revolution.setName("Revolution");
		revolution.setQuotes(QuoteProvider.revolutionQuotes());
		moods.add(revolution);
		
		

	

		
		

	
		
	

		return moods;
	}
}