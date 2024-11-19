**Random Quote Generator**

_Inspiring quotes at your fingertips, tailored to your mood!_

**Description**

The Random Quote Generator is a web application designed to uplift and inspire users through a collection of carefully curated quotes. Whether you're feeling happy, thoughtful, or in need of a spark, this app delivers quotes customized to your mood.

With a seamless user interface built using React and a powerful backend powered by Quarkus, this project showcases my full-stack development skills and creativity in crafting engaging user experiences.

**Features**

🎨 Mood-based Quote Generation: Select a mood and get a fitting quote instantly.
✍️ Editable Quotes: Customize quotes with different fonts and colors.
📲 Download and Share: Download your favorite quotes or share them on social media.

**Technologies Used**

**Frontend:**
React
Bootstrap
Canvas for custom text rendering
**Backend:**
Quarkus (Java)
REST API with caching for optimized performance
**Other Tools:**
Dockerized deployment using Jib
JSON-based data for quotes and authors
Service workers for offline support

## License  

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).  

![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/88x31.png)


# quarkus-react

This project uses Quarkus, the Supersonic Subatomic Java Framework.

If you want to learn more about Quarkus, please visit its website: <https://quarkus.io/>.

## Running the application in dev mode

You can run your application in dev mode that enables live coding using:

```shell script
./gradlew quarkusDev
```

> **_NOTE:_**  Quarkus now ships with a Dev UI, which is available in dev mode only at <http://localhost:8080/q/dev/>.

## Packaging and running the application

The application can be packaged using:

```shell script
./gradlew build
```

It produces the `quarkus-run.jar` file in the `build/quarkus-app/` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `build/quarkus-app/lib/` directory.

The application is now runnable using `java -jar build/quarkus-app/quarkus-run.jar`.

If you want to build an _über-jar_, execute the following command:

```shell script
./gradlew build -Dquarkus.package.jar.type=uber-jar
```

The application, packaged as an _über-jar_, is now runnable using `java -jar build/*-runner.jar`.

## Creating a native executable

You can create a native executable using:

```shell script
./gradlew build -Dquarkus.native.enabled=true
```

Or, if you don't have GraalVM installed, you can run the native executable build in a container using:

```shell script
./gradlew build -Dquarkus.native.enabled=true -Dquarkus.native.container-build=true
```

You can then execute your native executable with: `./build/quarkus-react-1.0.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult <https://quarkus.io/guides/gradle-tooling>.

## Related Guides

- RESTEasy Classic JSON-B ([guide](https://quarkus.io/guides/rest-json)): JSON-B serialization support for RESTEasy Classic
- RESTEasy Classic ([guide](https://quarkus.io/guides/resteasy)): REST endpoint framework implementing Jakarta REST and more

## Provided Code

### RESTEasy JAX-RS

Easily start your RESTful Web Services

[Related guide section...](https://quarkus.io/guides/getting-started#the-jax-rs-resources)
