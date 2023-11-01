import React from "react";

const SightCard = () => {
  return (
    <Text style={styles.text}>
    This is a sight card.
    It should contain a title, photo, and maybe time estimate- quick details.
   </Text>
  );
};

const styles = StyleSheet.create({
    text: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
    },
  });

export default SightCard;