import { useState } from "react";
import icon from "./assets/icon-success-check.svg";

function App() {
	const [values, setValues] = useState({
		fName: "",
		lName: "",
		email: "",
		query: "",
		message: "",
	});

	const [check, setCheck] = useState(false);

	function setRad() {
		setCheck(!check);
	}

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const change = (e) => {
		const { name, value } = e.target;

		setValues((v) => ({ ...v, [name]: value }));
	};
	const [validator, setValidator] = useState({});

	function butt(e) {
		const errors = {};
		e.preventDefault();
		if (!values.fName) errors.fName = "This field is required";
		if (!values.lName) errors.lName = "This field is required";
		if (!values.email) {
			errors.email = "This field is required";
		} else if (!emailPattern.test(values.email)) {
			errors.email = "please enter a valid email address";
		}
		if (!values.query) errors.query = "Please select a query";
		if (!values.message) errors.message = "This field is required";
		if (!check)
			errors.check = "To submit this form, please consent to being contacted";
		{
			if (Object.keys(errors).length === 0) {
				console.log("succesful");
				setValues({
					fName: "",
					lName: "",
					email: "",
					query: "",
					message: "",
				});

				setRad(false);
				setSubmitted(true);
				setTimeout(() => setSubmitted(false), 5000);
			}
			setValidator(errors);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}
	const [submitted, setSubmitted] = useState(false);
	return (
		<main
			className={`karla
		${submitted ? "mt-2" : "mt-12"}`}
		>
			{submitted && (
				<div
					className="bg-[#2b4246] text-white px-4 py-3 rounded-2xl max-w-[400px] w-full shadow-lg mx-auto"
					role="status"
					aria-live="polite"
				>
					<div>
						<p className="flex gap-2">
							<img src={icon} alt="icon" />
							Message sent!!
						</p>
						<p>Thanks for completing the form, we'll be in touch.</p>
					</div>
				</div>
			)}
			<div className="bg-white px-8 py-4  rounded-2xl mx-4 flex flex-col md:mx-auto max-w-3xl ">
				<h1 className="text-3xl mb-4 font-bold">Contact Us</h1>

				<form action="" className="flex flex-col">
					<div className="flex flex-col w-full md:flex-row gap-3">
						<div className="flex flex-col md:w-1/2 mb-4">
							<label htmlFor="Fname" className=" mb-2">
								First Name <span className="text-[#0c7d69ff]">*</span>
							</label>
							<input
								type="text"
								id="Fname"
								className={`border-2 border-[#87a3a6] hover:border-[#0c7d69ff] focus:border-[#0c7d69ff] hover:border-[2px] cursor-pointer pl-2 rounded-[7px] mb-1 h-12 md:h-10
								focus:outline-none
								${validator.fName ? "border-red-600" : ""}`}
								name="fName"
								onChange={change}
								value={values.fName}
								autoFocus
								aria-invalid={validator.fName ? "true" : "false"}
								aria-describedby={validator.fName ? "fName-error" : undefined}
							/>
							{validator.fName && (
								<p
									className="text-red-600 -mb-3"
									id="fName-error"
									aria-live="polite"
								>
									{validator.fName}
								</p>
							)}
						</div>

						<div className="flex flex-col md:w-1/2 mb-4">
							<label htmlFor="Lname" className=" mb-2 ">
								Last Name <span className="text-[#0c7d69ff]">*</span>
							</label>

							<input
								type="text"
								id="Lname"
								className={`border-2 border-[#87a3a6] hover:border-[#0c7d69ff] focus:border-[#0c7d69ff] hover:border-[2px] cursor-pointer pl-2 rounded-[7px] mb-1 h-12 md:h-10					
								focus:outline-none 
								${validator.lName ? "border-red-600" : ""}`}
								name="lName"
								onChange={change}
								value={values.lName}
								aria-invalid={validator.lName ? "true" : "false"}
								aria-describedby={validator.lName ? "lName-error" : undefined}
							/>
							{validator.lName && (
								<p className="text-red-600" id="lName-error" aria-live="polite">
									{validator.lName}
								</p>
							)}
						</div>
					</div>

					<label htmlFor="Email" className=" mb-2">
						Email Address <span className="text-[#0c7d69ff]">*</span>
					</label>

					<input
						type="text"
						id="Email"
						className={`border-2 border-[#87a3a6] hover:border-[#0c7d69ff] focus:border-[#0c7d69ff] hover:border-[2px] cursor-pointer pl-2 rounded-[7px] mb-1 md:h-10 h-12 focus:outline-none ${
							validator.email ? "border-red-600" : ""
						}`}
						name="email"
						onChange={change}
						value={values.email}
						aria-invalid={validator.email ? "true" : "false"}
						aria-describedby={validator.email ? "email-error" : undefined}
					/>
					{validator.email && (
						<p className="text-red-600" id="email-error" aria-live="polite">
							{validator.email}
						</p>
					)}

					<div className="flex flex-col my-4 space-y-1 ">
						<p>
							Query Type <span className="text-[#0c7d69ff]">*</span>
						</p>

						<div className="md:flex md:gap-2 space-y-4 ">
							<div
								className={`border-[2.2px] w-full md:h-10 h-12 flex items-center cursor-pointer pl-4 gap-6 rounded-[7px] 
								${
									values.query === "General Equity"
										? "bg-[#dff1e7] border-[#0c7d69ff]"
										: "border-[#87a3a6]"
								}`}
							>
								<input
									type="radio"
									name="query"
									id="general"
									className="border-[#87a3a6] h-8 w-4 cursor-pointer accent-[#0c7d69]"
									value={"General Equity"}
									onChange={change}
									checked={values.query === "General Equity"}
									aria-invalid={validator.query ? "true" : "false"}
									aria-describedby={validator.query ? "query-error" : undefined}
								/>
								<label htmlFor="general" className="cursor-pointer">
									{" "}
									General Equity
								</label>
							</div>

							<div
								className={`border-[2.2px] w-full md:h-10 h-12  cursor-pointer flex items-center pl-4 gap-6 rounded-[7px] 
								${
									values.query === "Support Request"
										? "bg-[#dff1e7] border-[#0c7d69ff]"
										: "border-[#87a3a6]"
								}`}
							>
								<input
									type="radio"
									name="query"
									id="support"
									className="cursor-pointer h-8 w-4 accent-[#0c7d69]"
									value={"Support Request"}
									onChange={change}
									checked={values.query === "Support Request"}
									aria-invalid={validator.query ? "true" : "false"}
									aria-describedby={validator.query ? "query-error" : undefined}
								/>
								<label htmlFor="support" className="cursor-pointer">
									{" "}
									Suppport Request
								</label>
							</div>
						</div>
						{validator.query && (
							<p className="text-red-600" id="query-error" aria-live="polite">
								{validator.query}
							</p>
						)}
					</div>

					<p className="mb-1">
						Message <span className="text-[#0c7d69ff]">*</span>
					</p>
					<textarea
						name="message"
						id=""
						onChange={change}
						value={values.message}
						className={`border md:h-20 h-32 rounded-[7px]  mb-1 pl-2 cursor-pointer border-[#87a3a6] focus:outline-none focus:border-[#0c7d69] hover:border-[#0c7d69]
							${validator.message ? "border-red-600" : ""}`}
						aria-invalid={validator.message ? "true" : "false"}
						aria-describedby={validator.message ? "message-error" : undefined}
					></textarea>
					{validator.message && (
						<p className="text-red-600" id="message-error" aria-live="polite">
							{validator.message}
						</p>
					)}

					<div className="my-4">
						<div className="flex gap-4 mb-1 ">
							<input
								type="checkbox"
								checked={check}
								id="check"
								onChange={change}
								name="consent"
								className="cursor-pointer accent-[#0c7d69] w-4"
								onClick={setRad}
								aria-invalid={validator.check ? "true" : "false"}
								aria-describedby={validator.check ? "check-error" : undefined}
							/>
							<label htmlFor="check" className="text-left ">
								I consent to being contacted by the team{" "}
								<span className="text-[#0c7d69ff]">*</span>
							</label>
						</div>
						{validator.check && (
							<p className="text-red-600" id="check-error" aria-live="polite">
								{validator.check}
							</p>
						)}
					</div>

					<button
						type="submit"
						onClick={butt}
						className="border bg-[#0c7d69] w-full mt-4 py-2 px-12 cursor-pointer rounded-[7px] text-2xl text-white "
					>
						Submit
					</button>
				</form>
			</div>
		</main>
	);
}

export default App;
