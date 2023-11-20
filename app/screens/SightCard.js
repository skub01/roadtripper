import React from "react";

const SightCard = () => {
  const handleClose = () => {
    // function for when the X button is pressed
    console.log("Closing the popup");
  };

  return (
    <View style={styles.container}>
      <XButton onClose={handleClose} />
      <Text style={styles.title}>
        Title Here
      </Text>
      <Text style={styles.text}>
        This is a sight card. It should contain a title, photo, and maybe time
        estimate- quick details.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 38,
  },
  text: {
    color: "black",
    fontSize: 26,
  },
});

export default SightCard;
