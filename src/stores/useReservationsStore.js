import { defineStore } from "pinia";

export const useReservationsStore = defineStore("reservations", {
  state: () => ({
    reservations: JSON.parse(localStorage.getItem("reservations")) || [],
  }),

  actions: {
    saveToLocalStorage() {
      localStorage.setItem("reservations", JSON.stringify(this.reservations));
    },

    addReservation(reservation) {
      this.reservations.push({
        ...reservation,
        id: Date.now(),
        createdAt: new Date().toISOString().split("T")[0],
      });
      this.saveToLocalStorage();
    },

    deleteReservation(id) {
      this.reservations = this.reservations.filter((r) => r.id !== id);
      this.saveToLocalStorage();
    },

    clearReservations() {
      this.reservations = [];
      this.saveToLocalStorage();
    },
  },
});
