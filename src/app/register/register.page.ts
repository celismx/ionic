import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { AuthenticateService } from "../services/authenticate.service";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage {
  registerForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El email es requerido" },
      { type: "pattern", message: "Ingresa un email válido." }
    ],
    password: [
      { type: "required", message: "La contraseña es obligatoria." },
      {
        type: "minlength",
        message: "La contraseña debe tener al menos 5 caracteres."
      }
    ],
    apellido: [
      { type: "required", message: "El apellido es requerido." },
      {
        type: "minlength",
        message: "El apellido debe tener mínimo tres letras."
      }
    ],
    nombre: [
      { type: "required", message: "El nombre es requerido." },
      {
        type: "minlength",
        message: "El nombre debe tener mínimo tres letras."
      }
    ]
  };
  errorMessage: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      nombre: new FormControl(
        "",
        Validators.compose([Validators.minLength(3), Validators.required])
      ),
      apellido: new FormControl(
        "",
        Validators.compose([Validators.minLength(3), Validators.required])
      )
    });
  }
  register(userData) {
    this.authService.registerUser(userData).then(() => {
      this.navCtrl.navigateBack("/login");
    });
  }
  goToLogin() {
    this.navCtrl.navigateBack("/login");
  }
}
