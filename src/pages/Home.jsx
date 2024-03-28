import Form from "../components/Form/Form";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const Home = () => {
	return (
		<main className="content">
			<h1 className="title">
				The best pizza.
				<br />
				<span className="text-yellow">
					Straight out of the oven, straight to you.
				</span>
			</h1>
			<p className="sub-title">
				👋 Welcome! Please start by telling us your name:
			</p>
            <Form>
                <Input type="text" placeholder="Your full name" />
                <Button text="Login" type="submit" />
            </Form>
		</main>
	);
};

export default Home;