import "./Contact.css";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>;
  return (
    <div className="container">
		<main className="row">
			
	

			<section className="col left">
				

				<div className="contactTitle">
					<h2>Contact</h2>
					<p>Pentru mai multe detalii ne puteti contacta folosind detaliile de mai jos.</p>
				</div>


				<div className="contactInfo">
					
					<div className="iconGroup">
						<div className="icon">
							<FontAwesomeIcon icon={faPhone}/>
						</div>
						<div className="details">
							<span>Tel</span>
							<span>076620019</span>
						</div>
					</div>

					<div className="iconGroup">
						<div className="icon">
							<FontAwesomeIcon icon={faEnvelope}/>
						</div>
						<div className="details">
							<span>Email</span>
							<span>calin.silvian@gmail.com</span>
						</div>
					</div>
				</div>


			</section>


			<section className="col right">
				

				<form className="messageForm">
					
					<div className="inputGroup halfWidth">
						<input type="text" name="" required="required"></input>
						<label>Numele tau</label>
					</div>

					<div className="inputGroup halfWidth">
						<input type="email" name="" required="required"></input>
						<label>Email</label>
					</div>

					<div className="inputGroup fullWidth">
						<input type="text" name="" required="required"></input>
						<label>Subiect</label>
					</div>

					<div className="inputGroup fullWidth">
						<textarea required="required"></textarea>
						<label>Mesaj</label>
					</div>

					<div className="inputGroup fullWidth">
						<button>Trimite</button>
					</div>

				</form>

			
			</section>

			

		</main>
	</div>
  );
}

export default Contact;
