package io.quarkus;

public class Quote {
	public String text;
	public int id;
	public String author;
	public Quote(int id, String text, String author) {
		this.id= id;
		this.text=text;
		this.author=author;
	}
public void setText(String text) {
	this.text = text;
}
public String getText() {
	return this.text;
}

}
	
