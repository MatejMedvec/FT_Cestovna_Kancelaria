<template>
  <v-container class="py-5">
    <Breadcrumb :currentView="'reservations'" />

    <v-row class="mt-5">
      <v-col cols="12">
        <h2 class="text-uppercase fw-bold">Moje rezervácie</h2>
      </v-col>

      <v-col cols="12" v-if="reservations.length === 0">
        <v-alert type="info">Zatiaľ nemáte žiadne rezervácie.</v-alert>
      </v-col>

      <v-col cols="12" v-else>
        <v-table>
          <thead>
            <tr>
              <th>Dátum cesty</th>
              <th>Destinácia</th>
              <th>Meno</th>
              <th>Email</th>
              <th>Vytvorené</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in reservations" :key="r.id">
              <td>{{ r.date }}</td>
              <td>{{ r.destinationName }}</td>
              <td>{{ r.name }}</td>
              <td>{{ r.email }}</td>
              <td>{{ r.createdAt }}</td>
              <td class="text-right">
                <v-btn
                  size="small"
                  color="red"
                  variant="tonal"
                  @click="openCancelOneDialog(r.id)"
                >
                  Zrušiť
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>

        <div class="mt-4">
          <v-btn color="red" variant="outlined" @click="openCancelAllDialog">
            Zrušiť všetky
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- DIALOG: potvrdenie -->
    <v-dialog v-model="dialog.open" max-width="520">
      <v-card>
        <v-card-title class="text-uppercase fw-bold">
          {{ dialog.title }}
        </v-card-title>

        <v-card-text>
          {{ dialog.message }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn variant="text" @click="closeDialog">
            Zrušiť
          </v-btn>

          <v-btn color="red" variant="tonal" @click="confirmDialog">
            Potvrdiť
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Breadcrumb from "@/components/Shared/Breadcrumb.vue";
import { useReservationsStore } from "@/stores/useReservationsStore";

export default {
  name: "ReservationsView",
  components: { Breadcrumb },

  data() {
    return {
      store: null,

      dialog: {
        open: false,
        type: null, 
        reservationId: null,
        title: "",
        message: "",
      },
    };
  },

  computed: {
    reservations() {
      return this.store ? this.store.reservations : [];
    },
  },

  created() {
    this.store = useReservationsStore();
  },

  methods: {
    openCancelOneDialog(id) {
      this.dialog.open = true;
      this.dialog.type = "one";
      this.dialog.reservationId = id;
      this.dialog.title = "Zrušiť rezerváciu";
      this.dialog.message = "Naozaj chcete zrušiť túto rezerváciu?";
    },

    openCancelAllDialog() {
      this.dialog.open = true;
      this.dialog.type = "all";
      this.dialog.reservationId = null;
      this.dialog.title = "Zrušiť všetky rezervácie";
      this.dialog.message =
        "Naozaj chcete zrušiť všetky rezervácie? Táto akcia sa nedá vrátiť späť.";
    },

    closeDialog() {
      this.dialog.open = false;
      this.dialog.type = null;
      this.dialog.reservationId = null;
      this.dialog.title = "";
      this.dialog.message = "";
    },

    confirmDialog() {
      if (!this.store) return;

      if (this.dialog.type === "one" && this.dialog.reservationId != null) {
        this.store.deleteReservation(this.dialog.reservationId);
      } else if (this.dialog.type === "all") {
        this.store.clearReservations();
      }

      this.closeDialog();
    },
  },
};
</script>

<style scoped>
.text-uppercase {
  font-weight: bold;
  text-transform: uppercase;
}
.text-right {
  text-align: right;
}
.mt-4 {
  margin-top: 1rem;
}
</style>
