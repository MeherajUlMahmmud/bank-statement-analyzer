import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart, CheckCircle, FileText, PieChart, Shield, Zap } from 'lucide-react'

export default function HomePage() {
	return (
		<div className="py-16">
			{/* Hero Section */}
			<header className="bg-primary-600 text-white">
				<div className="container mx-auto px-6 py-16">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="md:w-1/2 mb-8 md:mb-0">
							<h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
								Unlock Insights from Your Bank Statements
							</h1>
							<p className="text-xl mb-8">
								Our advanced AI-powered analyzer turns your financial data into actionable insights, helping you make smarter decisions.
							</p>
							<Link to="/upload">
								<Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
									Get Started <ArrowRight className="w-4 h-4 ml-2" />
								</Button>
							</Link>
						</div>
						<div className="md:w-1/2">
							<img src="https://precisa.in/wp-content/uploads/2021/04/BSA-Chart.jpg?height=400&width=600" alt="Bank Statement Analysis" className="rounded-lg shadow-2xl" />
						</div>
					</div>
				</div>
			</header>

			{/* Features Section */}
			<section className="py-20">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{ icon: FileText, title: "PDF Parsing", description: "Effortlessly extract data from various bank statement formats" },
							{ icon: PieChart, title: "Transaction Categorization", description: "Automatically categorize your expenses for better insights" },
							{ icon: BarChart, title: "Trend Analysis", description: "Visualize your spending patterns over time" },
							{ icon: Shield, title: "Bank-Level Security", description: "Your data is protected with state-of-the-art encryption" },
							{ icon: Zap, title: "Fast Processing", description: "Get your analysis results in seconds, not hours" },
							{ icon: CheckCircle, title: "Accuracy Guaranteed", description: "Our AI ensures precise data extraction and analysis" },
						].map((feature, index) => (
							<Card key={index}>
								<CardHeader>
									<feature.icon className="h-10 w-10 text-primary-600 mb-2" />
									<CardTitle>{feature.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>{feature.description}</CardDescription>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="bg-white py-20">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="md:w-1/2 mb-8 md:mb-0">
							<img src="https://precisa.in/wp-content/uploads/2021/04/BSA-Chart.jpg?height=400&width=600" alt="How It Works" className="rounded-lg shadow-xl" />
						</div>
						<div className="md:w-1/2 md:pl-12">
							<ol className="space-y-6">
								{[
									"Upload your bank statement PDF",
									"Our AI extracts and categorizes the data",
									"Review your personalized financial analysis",
									"Gain insights and make informed decisions"
								].map((step, index) => (
									<li key={index} className="flex items-center">
										<span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary-600 text-white rounded-full mr-4">
											{index + 1}
										</span>
										<span className="text-lg">{step}</span>
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{ name: "Alex Johnson", role: "Small Business Owner", quote: "This tool has revolutionized how I manage my business finances. It's a game-changer!" },
							{ name: "Sarah Lee", role: "Financial Advisor", quote: "I recommend this to all my clients. It makes understanding complex financial data so much easier." },
							{ name: "Michael Chen", role: "Freelance Designer", quote: "As a freelancer, keeping track of expenses was a nightmare. Not anymore, thanks to this amazing tool!" },
						].map((testimonial, index) => (
							<Card key={index} className="bg-primary-50">
								<CardHeader>
									<CardTitle>{testimonial.name}</CardTitle>
									<CardDescription>{testimonial.role}</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="italic">"{testimonial.quote}"</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-primary-600 text-white py-20">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold mb-4">Ready to Gain Financial Clarity?</h2>
					<p className="text-xl mb-8">Start analyzing your bank statements today and unlock valuable insights.</p>
					<Link to="/upload">
						<Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
							Analyze Your Statement Now
						</Button>
					</Link>
				</div>
			</section>
		</div>
	)
}