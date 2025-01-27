'use client'
import { useRouter } from 'next/navigation';


export default function DD() {
    const router = useRouter();


    // Funktion für den Formular-Submit
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        router.push('Questions/question_ohnequellen/question_1'); // Ersetze dies mit dem tatsächlichen Pfad der nächsten Seite
    };


    // Gemeinsamer Stil für alle Paragraphen
    const paragraphStyle = {
        marginBottom: '3px',
        color: '#fff',
        fontSize: '16px',
    };


    // Überschriften
    const headStyle = {
        marginBottom: '20px',
        color: '#fff',
        fontSize: '23px',
        margin: '10px'
    }


    return (
        <div style={{
            textAlign: 'center',
            backgroundColor: '#000', // Schwarzer Hintergrund
            color: '#000',           // Weißer Text
            padding: '20px'
        }}>
            <h1 style={headStyle}>
                Einverständniserklärung zur Studienteilnahme
            </h1>


            <p style={paragraphStyle}>
                Sie sind eingeladen, an der Onlinestudie "Name noch unbekannt" teilzunehmen. Die Studie wird von Philipp
                Schwarzer, Michael Winter und Maximilian Schnabel durchgeführt und von PD Dr. David Elsweiler an der
                Universität Regensburg geleitet. Die Studie mit voraussichtlich 66 Teilnehmenden findet im Zeitraum vom
                15.02.2025 bis 30.03.2025 statt. Bitte beachten Sie:
            </p>


            <p style={paragraphStyle}>
                • Ihre Teilnahme ist vollkommen freiwillig und kann jederzeit abgebrochen oder widerrufen werden
            </p>


            <p style={paragraphStyle}>
                • Eine Untersuchung der Onlinestudie dauert ca. 20 Minuten
            </p>


            <p style={paragraphStyle}>
                • Sie haben aber keinen direkten Nutzen durch die Studienteilnahme, unterstützen aber unsere Arbeit und
                helfen die Forschung in diesem Bereich voranzubringen
            </p>


            <p style={paragraphStyle}>
                • Wir erfassen zur Analyse einige persönliche Daten (z.B. Alter, Gender, usw.)
            </p>


            <p style={paragraphStyle}>
                • Während der Sitzung werden Ihre Eingaben registriert und Notizen angefertigt
            </p>


            <p style={paragraphStyle}>
                • Aufzeichnungen und personenbezogene Daten unterliegen den Richtlinien der Datenschutzgrundverordnung
                (DSGVO) und werden pseudoanonymisiert (über eine codierte Kennziffer) gespeichert, ausgewertet und
                möglicherweise veröffentlicht, wobei ohne die Informationen der Forschenden keine Rückschlüsse auf
                einzelne Personen möglich sind
            </p>


            <p style={paragraphStyle}>
                Die Alternative zur Studienteilnahme ist die Nichtteilnahme. Wenn Sie Fragen, Bedenken oder Beschwerden
                zur Einwilligungserklärung dieser Forschungsstudie oder zu Ihren Rechten als Versuchsperson haben,
                wenden Sie sich bitte an PD Dr. David Elsweiler. Bitte lesen Sie die folgenden Informationen sorgfältig
                durch und nehmen Sie sich die Zeit, die Sie benötigen.
            </p>


            <h1 style={headStyle}>
                1. Zweck und Ziel dieser Forschung
            </h1>


            <p style={paragraphStyle}>
                Messen der Credibility von KI, ob bestimmte Variablen die Credibility auf KI ändern. Ihre Teilnahme
                hilft uns, dieses Forschungsziel zu erreichen. Die Ergebnisse dieser Forschung können auf
                wissenschaftlichen oder Fachtagungen präsentiert oder in wissenschaftlichen Tagungsbänden und
                Zeitschriften veröffentlicht werden.
            </p>


            <h1 style={headStyle}>
                2. Studienteilnahme
            </h1>


            <p style={paragraphStyle}>
                Ihre Teilnahme an dieser Onlinestudie ist vollkommen freiwillig und kann jederzeit abgebrochen oder
                widerrufen werden. Sie können die Beantwortung von Fragen oder die weitere Durchführung der Studie
                jederzeit verweigern, wenn Sie sich in irgendeiner Weise unwohl fühlen. Sie können die Teilnahme
                jederzeit ohne Angabe von Gründen widerrufen oder beenden. Wir behalten uns allerdings vor, Sie von der
                Studie auszuschließen (z.B. bei ungültigen Versuchen oder wenn eine Fortsetzung der Studie sich negativ
                auf Ihr Wohlbefinden oder die Ausstattung auswirken könnte). Eine wiederholte Teilnahme an der Studie
                ist nicht gestattet.
            </p>
            <h1 style={headStyle}>Studienablauf</h1>
            <p style={paragraphStyle}>1. Webseite öffnen
                <br />2. Antworten lesen
                <br />3. Meinung dazugeben
                <br />4. Erneut</p>
            <p style={paragraphStyle}>Die Bestätigung zur Teilnahme an dieser Studie kann direkt im Anschluss bei den Forschenden eingeholt werden</p>
            <h1 style={headStyle}>4. Risiken und Nutzen </h1>
            <p style={paragraphStyle}>In der Onlinestudie werden Sie keinen unmittelbaren Risiken oder Gefahren ausgesetzt sein. Wie bei allen
                Computersystemen, auf denen Daten verarbeitet werden, besteht trotz Sicherheitsmaßnahmen ein geringes Risiko eines
                Datenlecks und des Verlusts vertraulicher oder personenbezogenen Informationen. Sie haben aber keinen direkten
                Nutzen durch die Studienteilnahme, unterstützen aber unsere Arbeit und helfen die Forschung in diesem Bereich
                voranzubringen.  </p>
            <h1 style={headStyle}>5. Datenschutz und Vertraulichkeit</h1>
            <p style={paragraphStyle}>In dieser Studie werden für unsere Forschung persönliche und personenbezogene Daten erhoben. Die Verwendung von persönlichen oder personenbezogenen Daten unterliegt der Datenschutz-Grundverordnung (DSGVO) der Europäischen Union (EU) und werden in Übereinstimmung mit der DSGVO behandelt. Das bedeutet, dass Sie die Daten, die in dieser Studie erhoben wurden, einsehen, berichtigen, in der Verarbeitung einschränken und löschen lassen können. Nur mit Ihrer Einwilligung werden in der Studie Ihre Eingaben registriert und Notizen angefertigt. Wir planen die Ergebnisse dieser und anderer Forschungsstudien in wissenschaftlichen Artikeln oder anderen Medien zu veröffentlichen. Ihre Daten werden von den Forschern nicht länger als 2 Jahre aufbewahrt oder bis Sie die Forscher kontaktieren, um Ihre Daten zu vernichten oder zu löschen lassen. Der Zugriff auf die Rohdaten, Interviewtranskripte und Beobachtungsprotokolle der Studie erfolgt verschlüsselt, passwortgeschützt und nur für die Autoren, Kollegen und Forscher, die im Rahmen dieser Forschung zusammenarbeiten. Andere Mitglieder und Administratoren unserer Institution haben keinen Zugriff auf Ihre Daten. Die Daten werden durch codierte Kennziffern anonymisiert und ausschließlich in aggregierter Form (zusammenfassend) veröffentlicht, sodass ohne die Informationen der Forschenden keine Rückschlüsse auf einzelne Personen möglich sind. Jegliche Interviewinhalte oder direkte Zitate aus dem Interview, die über wissenschaftliche Veröffentlichungen oder andere wissenschaftliche Medien einsehbar sind, werden ebenfalls durch codierte Kennziffern anonymisiert. Da keine Kontaktdaten (z.B. E-Mails) erhoben werden, können die Forschenden die Teilnehmenden nicht über weitere Details der Studie oder über eine mögliche Verletzung vertraulicher Daten informieren.
            </p>
            <h1 style={headStyle}>6. Nennung der Untersuchenden
            </h1>
            <p style={paragraphStyle}>Wenn Sie Fragen oder Bedenken bezüglich der Forschung haben, wenden Sie sich bitte an:
            </p>
            <div className='form flex-direction-column'>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <button type="submit" style={{
                        margin: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                    }}>
                        Nächste Seite
                    </button>
                </form>
            </div>
        </div>
    );
}
