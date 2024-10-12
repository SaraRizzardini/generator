package io.quarkus;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Mood {
	private String name;
	//private Map<Integer, Quote> quotes= new HashMap<>();
	private Map<Integer, String> quotes= new HashMap<>();
public void setName(String name) {
	this.name=name;
	}
	public String getName() {
		return name;
	}
	public void setQuotes(Map<Integer, String>quotes) {
		this.quotes= quotes;
	}
	public Map<Integer,String> getQuotes() {
		return quotes;
	}
}