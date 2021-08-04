export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://udm-max-coach-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      },
    );

    if (!response.ok) {
      // error...
    }

    // const responseData = await response.json()

    context.commit('registerCoach', {
      ...coachData,
      id: userIdsa,
    });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://udm-max-coach-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`,
    );

    const responseData = await response.json();

    if (!response.ok) {
      // error...
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  },
};
