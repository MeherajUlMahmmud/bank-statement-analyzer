import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AppUrls } from "@/configs/constants.ts"
import { AlertOctagon, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md mx-auto shadow-lg bg-gradient-to-b from-gray-50 to-gray-100">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold">
              <span className="text-red-500">404</span> Error
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <AlertOctagon className="w-24 h-24 mx-auto text-red-500 mb-6" />
            <p className="text-xl font-semibold dark:text-gray-300 mb-4">
              Oops! Page Not Found
            </p>
            <p className="">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild className="">
              <Link to={AppUrls.homeRoute}>
                <Home className="mr-2 h-4 w-4" /> Go to Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

export default ErrorPage;
