FROM ubuntu:22.04

RUN mkdir /app
WORKDIR /app

# Add Build script and build the stuff.
ADD build.sh ./
RUN chmod +x ./build.sh
RUN ./build.sh

# Add run.sh This will be executeable script running our java program.
ADD run.sh ./
RUN chmod +x ./run.sh

# Add executeable jar
ADD shoppinglist-0.0.1-SNAPSHOT.jar ./
RUN chmod +x ./shoppinglist-0.0.1-SNAPSHOT.jar

ENTRYPOINT [ "./run.sh" ]