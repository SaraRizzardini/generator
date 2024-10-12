package io.quarkus;

public class Quote {
	public String text;
	public int id;
	public Quote(int id, String text) {
		this.id= id;
		this.text=text;
	}
public void setText(String text) {
	this.text = text;
}
public String getText() {
	return this.text;
}
}
	
