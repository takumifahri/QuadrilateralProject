<template>
  <div class="organisasi-page">
    <headerAdmin />
    <div class="content">
      <!-- Input Nama Organisasi -->
      <div class="form-group">
        <label for="orgName">Nama Organisasi</label>
        <input id="orgName" v-model="orgName" type="text" class="input-text" placeholder="Masukkan nama organisasi"/>
      </div>

      <!-- Input Deskripsi Singkat -->
      <div class="form-group">
        <label for="orgDesc">Deskripsi Singkat Organisasi</label>
        <textarea id="orgDesc" v-model="orgDesc" class="textarea-text" placeholder="Masukkan deskripsi singkat"></textarea>
      </div>

      <!-- Upload Foto Organisasi -->
      <div class="form-group">
        <label for="orgPhoto">Foto Organisasi </label>
        <input type="file" id="orgPhoto" @change="onFileChange" />
        <div class="drag-drop" @dragover.prevent @drop.prevent="onDrop">
          <p>Drag and Drop Foto Disini atau Klik untuk Upload</p>
          <img v-if="orgPhotoUrl" :src="orgPhotoUrl" class="photo-preview" />
          <button v-if="orgPhotoUrl" class="remove-btn" @click="removePhoto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4 9H8v-2h8v2z"/>
            </svg>
            Hapus Foto
          </button>
        </div>
      </div>

      <!-- Input Visi Organisasi -->
      <div class="form-group">
        <label for="orgVision">Visi Organisasi</label>
        <textarea id="orgDesc" v-model="orgDesc" class="textarea-text" placeholder="Masukkan visi organisasi"></textarea>
      </div>

      <!-- Upload Foto Visi -->
      <div class="form-group">
        <label for="orgPhotoVision">Foto Visi </label>
        <input type="file" id="orgPhotoVision" @change="onFileChange" />
        <div class="drag-drop" @dragover.prevent @drop.prevent="onDrop">
          <p>Drag and Drop Foto Disini atau Klik untuk Upload</p>
          <img v-if="orgPhotoUrl" :src="orgPhotoUrl" class="photo-preview" />
          <button v-if="orgPhotoUrl" class="remove-btn" @click="removePhoto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4 9H8v-2h8v2z"/>
            </svg>
            Hapus Foto
          </button>
        </div>
      </div>

      <!-- Input Misi Organisasi Gunakan Bullet -->
      <div class="form-group">
        <label for="orgMision">Misi Organisasi</label>
        <textarea id="orgMision" v-model="orgMisionInput" class="textarea-text" placeholder="Masukkan misi organisasi, pisahkan setiap poin dengan baris baru"></textarea>
      </div>

      <!-- Output Misi Organisasi dalam Bullet List -->
      <div class="form-group">
        <label>Misi Organisasi:</label>
        <ul class="bullet-list">
          <li v-for="(mision, index) in orgMisionList" :key="index">{{ mision }}</li>
        </ul>
      </div>

      <!-- Upload Foto Misi -->
      <div class="form-group">
        <label for="orgPhotoMision">Foto Misi </label>
        <input type="file" id="orgPhotoMision" @change="onFileChange" />
        <div class="drag-drop" @dragover.prevent @drop.prevent="onDrop">
          <p>Drag and Drop Foto Disini atau Klik untuk Upload</p>
          <img v-if="orgPhotoUrl" :src="orgPhotoUrl" class="photo-preview"/>
          <button v-if="orgPhotoUrl" class="remove-btn" @click="removePhoto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4 9H8v-2h8v2z"/>
            </svg>
            Hapus Foto
          </button>
        </div>
      </div>

      <!-- Input Program Organisasi Gunakan Bullet -->
      <div class="form-group">
        <label for="orgProgram">Program Organisasi</label>
        <textarea id="orgProgram" v-model="orgProgramInput" class="textarea-text" placeholder="Masukkan program organisasi, pisahkan setiap poin dengan baris baru"></textarea>
      </div>

      <!-- Output Program Organisasi dalam Bullet List -->
      <div class="form-group">
        <label>Program Organisasi:</label>
        <ul class="bullet-list">
          <li v-for="(program, index) in orgProgramList" :key="index">{{ program }}</li>
        </ul>
      </div>

      <!-- Input Prestasi Organisasi Gunakan Bullet -->
      <div class="form-group">
        <label for="orgPrestasi">Prestasi Organisasi</label>
        <textarea id="orgPrestasi" v-model="orgPrestasiInput" class="textarea-text" placeholder="Masukkan prestasi organisasi, pisahkan setiap poin dengan baris baru"></textarea>
      </div>

      <!-- Output Prestasi Organisasi dalam Bullet List -->
      <div class="form-group">
        <label>Prestasi Organisasi:</label>
        <ul class="bullet-list">
          <li v-for="(prestasi, index) in orgPrestasiList" :key="index">{{ prestasi }}</li>
        </ul>
      </div>

<!-- Galeri Dokumentasi -->
<div class="form-group">
  <label for="orgDocumentation">Galeri Dokumentasi</label>
  <input type="file" id="orgDocumentation" multiple @change="onDocumentationChange" />
  <div class="gallery">
    <div v-for="(file, index) in orgDocumentation" :key="index" class="gallery-item">
      <img v-if="file.type.startsWith('image/')" :src="file.url" class="gallery-photo" />
      <video v-if="file.type.startsWith('video/')" controls :src="file.url" class="gallery-video"></video>
      <button class="remove-btn" @click="removeDocumentation(index)">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4 9H8v-2h8v2z" />
        </svg>
        Hapus
      </button>
    </div>
  </div>
</div>

      <!-- Tabel Anggota Organisasi -->
      <div class="form-group">
        <label>Anggota Organisasi</label>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Jabatan</th>
              <th>Foto</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(member, index) in members" :key="index">
              <td>{{ member.name }}</td>
              <td>{{ member.position }}</td>
              <td><img :src="member.photo" class="member-photo" v-if="member.photo" /></td>
              <td>
                <button @click="editMember(index)" class="btn btn-edit">Edit</button>
                <button @click="deleteMember(index)" class="btn btn-delete">Delete</button>
              </td>
            </tr>
            <!-- Baris Input Anggota Baru -->
            <tr class="new-member-row">
              <td>
                <input type="text" v-model="newMemberName" placeholder="Nama" class="input-text"/>
              </td>
              <td>
                <input type="text" v-model="newMemberPosition" placeholder="Jabatan" class="input-text"/>
              </td>
              <td>
                <input type="file" @change="onNewMemberPhotoChange" class="custom-file-input"/>
                <img :src="newMemberPhoto" class="member-photo" v-if="newMemberPhoto" />
              </td>
              <td>
                <button @click="saveNewMember" class="btn btn-save">Simpan Anggota</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Input Quotes -->
      <div class="form-group">
        <label for="orgQuotes">Quotes</label>
        <textarea id="orgQuotes" v-model="orgQuotes" class="textarea-text" placeholder="Masukkan quotes"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import headerAdmin from './headerAdmin.vue';
import { VueCropper } from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
  components: {
    headerAdmin,
  },
  data() {
    return {
      orgName: '',
      orgDesc: '',
      orgPhotoUrl: null,
      members: [],
      newMemberName: '',
      newMemberPosition: '',
      newMemberPhoto: null,
      orgMisionInput: '',
      orgMisionList: [],
      orgProgramInput: '',
      orgProgramList: [],
      orgPrestasiInput: '',
      orgPrestasiList: [],
    };
  },
  computed: {
    orgMisionList() {
      return this.orgMisionInput.split('\n').filter(mision => mision.trim() !== '');
    },
    orgProgramList() {
      return this.orgProgramInput.split('\n').filter(program => program.trim() !== '');
    },
    orgPrestasiList() {
      return this.orgPrestasiInput.split('\n').filter(prestasi => prestasi.trim() !== '');
    },
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.orgPhotoUrl = URL.createObjectURL(file);
    },
    onDrop(e) {
      const file = e.dataTransfer.files[0];
      this.orgPhotoUrl = URL.createObjectURL(file);
    },
    removePhoto() {
    this.orgPhotoUrl = null;
    this.orgPhotoFile = null;
    },
    addMember() {
      this.members.push({ photo: '', name: '', position: '' });
    },
    editMember(index) {
      // Implement edit logic here
      const member = this.members[index];
      const newName = prompt("Edit Nama:", member.name);
      const newPosition = prompt("Edit Jabatan:", member.position);
      if (newName !== null && newPosition !== null) {
        this.$set(this.members, index, { ...member, name: newName, position: newPosition });
      }
    },
    deleteMember(index) {
      this.members.splice(index, 1);
    },
    addMember() {
      this.members.push({ photo: '', name: '', position: '' });
    },
    editMember(index) {
      const member = this.members[index];
      const newName = prompt("Edit Nama:", member.name);
      const newPosition = prompt("Edit Jabatan:", member.position);
      if (newName !== null && newPosition !== null) {
        this.$set(this.members, index, { ...member, name: newName, position: newPosition });
      }
    },
    deleteMember(index) {
      this.members.splice(index, 1);
    },
    onNewMemberPhotoChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.newMemberPhoto = URL.createObjectURL(file);
      }
    },
    saveNewMember() {
      if (this.newMemberName && this.newMemberPosition && this.newMemberPhoto) {
        this.members.push({
          name: this.newMemberName,
          position: this.newMemberPosition,
          photo: this.newMemberPhoto
        });
        this.newMemberName = '';
        this.newMemberPosition = '';
        this.newMemberPhoto = null;
      } else {
        alert('Harap isi semua field anggota baru.');
      }
    },
    onDocumentationChange(e) {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.orgDocumentation.push({ type: file.type, url: e.target.result });
      };
      reader.readAsDataURL(file);
    }
    },
    removeDocumentation(index) {
      this.orgDocumentation.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.organisasi-page {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.input-text {
  border: 2px solid #0000006a;
  width: 100%;
  /* height: 200px; */
  font-size: 54px;
}

.textarea-text {
  border: 2px solid #0000006a;
  width: 100%;
  height: 200px;
  font-size: 24px;
}

.drag-drop {
  border: 2px dashed #ccc;
  padding: 20px;
  height: 160px;
  text-align: center;
  cursor: pointer;
}

.photo-preview {
  max-width: 100%;
  max-height: 200px;
  margin-top: 10px;
}

.member-photo {
  width: 50px;
  height: 50px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
}

button {
  margin-right: 5px;
  cursor: pointer;
}

.remove-btn {
background-color: #f44336; /* Warna latar merah */
color: white; /* Warna teks putih */
border: none; /* Hapus border */
padding: 8px 12px; /* Ruang dalam tombol */
border-radius: 4px; /* Sudut tombol */
cursor: pointer; /* Pointer ketika diarahkan */
transition: background-color 0.3s; /* Transisi perubahan warna latar */
display: flex; /* Menyusun ikon dan teks dalam satu baris */
align-items: center; /* Mengatur ikon dan teks ke tengah vertikal */
}

.remove-btn:hover {
  background-color: #d32f2f; /* Ubah warna latar saat dihover */
}

.remove-btn svg {
  width: 20px; /* Ukuran ikon */
  height: 20px; /* Ukuran ikon */
  margin-right: 8px; /* Jarak antara ikon dan teks */
}

.bullet-list li {
font-size: 24px; /* Ubah ukuran font list item menjadi 24 */
}

.bullet-input {
display: flex;
align-items: center;
gap: 10px;
}

.bullet-input textarea {
  flex: 1;
}

.bullet-input button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.bullet-input button:hover {
  background-color: #0056b3;
}

.new-member-row input[type="text"] {
width: 100%;
padding: 5px;
border: 2px solid #0000006a;
font-size: 24px; /* Ubah ukuran font menjadi 24 */
box-sizing: border-box;
}

.custom-file-input {
  width: 100%;
  padding: 5px;
  border: 2px solid #0000006a;
  box-sizing: border-box;
}

.new-member-row img {
  max-width: 50px;
  max-height: 50px;
}

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}

.btn-edit {
  background-color: #ff9800;
}

.btn-edit:hover {
  background-color: #e68a00;
}

.btn-delete {
  background-color: #f44336;
}

.btn-delete:hover {
  background-color: #d32f2f;
}

.btn-add {
  background-color: #4caf50;
}

.btn-add:hover {
  background-color: #45a049;
}

.btn-save {
  background-color: #007bff;
}

.btn-save:hover {
  background-color: #0056b3;
}
</style>