import Animation from './animation'

export default function Footer() {
    return (
        <Animation.FadeIn>
            <footer className="mt-10">
                <div className="text-center mb-6">
                    <p>© 2022 Mr.Miss | All right reserved</p>
                    <p>Made With 💖</p>
                </div>
            </footer>
        </Animation.FadeIn>
    )
}
