import { writeFileSync, mkdirSync } from "fs";
const OUT = "C:/Users/하봄/Downloads/Holdem_Project/docs/auth-email-templates";
mkdirSync(OUT, { recursive: true });
// 키: cT 확인 제목 · cB 본문 · cBtn 버튼 · cI 무시 안내 · rT·rB·rBtn·rI 재설정 · L 링크 대체 안내
const T = {
 ko: { cT:"이메일 주소를 인증해 주세요", cB:"홀덤마스터 가입을 마치려면 아래 버튼을 눌러 이메일 주소를 인증해 주세요.", cBtn:"이메일 인증하기", cI:"홀덤마스터에 가입한 적이 없다면 이 메일은 무시하셔도 됩니다.", rT:"비밀번호 재설정", rB:"아래 버튼을 눌러 새 비밀번호를 설정해 주세요.", rBtn:"새 비밀번호 설정", rI:"비밀번호 재설정을 요청하지 않았다면 이 메일은 무시하셔도 됩니다. 비밀번호는 바뀌지 않습니다.", L:"버튼이 눌리지 않으면 아래 주소를 브라우저에 붙여 넣으세요." },
 en: { cT:"Confirm your email address", cB:"To finish signing up for HoldemMaster, tap the button below to confirm your email address.", cBtn:"Confirm email", cI:"If you didn't sign up for HoldemMaster, you can ignore this email.", rT:"Reset your password", rB:"Tap the button below to set a new password.", rBtn:"Set a new password", rI:"If you didn't ask to reset your password, you can ignore this email. Your password won't change.", L:"If the button doesn't work, paste this link into your browser:" },
 ja: { cT:"メールアドレスの確認", cB:"HoldemMasterへの登録を完了するには、下のボタンを押してメールアドレスを確認してください。", cBtn:"メールアドレスを確認", cI:"HoldemMasterに登録した覚えがない場合は、このメールを破棄してください。", rT:"パスワードの再設定", rB:"下のボタンを押して、新しいパスワードを設定してください。", rBtn:"新しいパスワードを設定", rI:"パスワードの再設定をリクエストしていない場合は、このメールを破棄してください。パスワードは変更されません。", L:"ボタンが機能しない場合は、以下のURLをブラウザに貼り付けてください。" },
 es: { cT:"Confirma tu correo electrónico", cB:"Para terminar tu registro en HoldemMaster, toca el botón de abajo y confirma tu correo.", cBtn:"Confirmar correo", cI:"Si no te registraste en HoldemMaster, ignora este correo.", rT:"Restablece tu contraseña", rB:"Toca el botón de abajo para crear una contraseña nueva.", rBtn:"Crear contraseña nueva", rI:"Si no pediste restablecer tu contraseña, ignora este correo. Tu contraseña no cambiará.", L:"Si el botón no funciona, copia este enlace en tu navegador:" },
 pt: { cT:"Confirme seu e-mail", cB:"Para concluir seu cadastro no HoldemMaster, toque no botão abaixo e confirme seu e-mail.", cBtn:"Confirmar e-mail", cI:"Se você não se cadastrou no HoldemMaster, ignore este e-mail.", rT:"Redefina sua senha", rB:"Toque no botão abaixo para criar uma nova senha.", rBtn:"Criar nova senha", rI:"Se você não pediu para redefinir a senha, ignore este e-mail. Sua senha não será alterada.", L:"Se o botão não funcionar, cole este link no navegador:" },
 de: { cT:"Bestätige deine E-Mail-Adresse", cB:"Um deine Registrierung bei HoldemMaster abzuschließen, tippe auf den Button unten und bestätige deine E-Mail-Adresse.", cBtn:"E-Mail bestätigen", cI:"Wenn du dich nicht bei HoldemMaster registriert hast, kannst du diese E-Mail ignorieren.", rT:"Passwort zurücksetzen", rB:"Tippe auf den Button unten, um ein neues Passwort festzulegen.", rBtn:"Neues Passwort festlegen", rI:"Wenn du kein neues Passwort angefordert hast, kannst du diese E-Mail ignorieren. Dein Passwort bleibt unverändert.", L:"Falls der Button nicht funktioniert, kopiere diesen Link in deinen Browser:" },
 zh: { cT:"请验证你的邮箱", cB:"点击下方按钮验证邮箱，即可完成 HoldemMaster 注册。", cBtn:"验证邮箱", cI:"如果你没有注册过 HoldemMaster，请忽略这封邮件。", rT:"重置密码", rB:"点击下方按钮设置新密码。", rBtn:"设置新密码", rI:"如果你没有申请重置密码，请忽略这封邮件，你的密码不会改变。", L:"如果按钮无法使用，请把下面的链接复制到浏览器中打开：" },
 "zh-hant": { cT:"請驗證你的電子郵件", cB:"點擊下方按鈕驗證電子郵件，即可完成 HoldemMaster 註冊。", cBtn:"驗證電子郵件", cI:"如果你沒有註冊過 HoldemMaster，請忽略這封郵件。", rT:"重設密碼", rB:"點擊下方按鈕設定新密碼。", rBtn:"設定新密碼", rI:"如果你沒有申請重設密碼，請忽略這封郵件，你的密碼不會變更。", L:"如果按鈕無法使用，請將下方連結複製到瀏覽器開啟：" },
 fr: { cT:"Confirme ton adresse e-mail", cB:"Pour finaliser ton inscription sur HoldemMaster, appuie sur le bouton ci-dessous et confirme ton adresse e-mail.", cBtn:"Confirmer mon e-mail", cI:"Si tu n'as pas créé de compte sur HoldemMaster, ignore cet e-mail.", rT:"Réinitialise ton mot de passe", rB:"Appuie sur le bouton ci-dessous pour choisir un nouveau mot de passe.", rBtn:"Choisir un nouveau mot de passe", rI:"Si tu n'as pas demandé de réinitialisation, ignore cet e-mail. Ton mot de passe ne changera pas.", L:"Si le bouton ne fonctionne pas, colle ce lien dans ton navigateur\u00a0:" },
 id: { cT:"Konfirmasi alamat email kamu", cB:"Untuk menyelesaikan pendaftaran di HoldemMaster, ketuk tombol di bawah untuk mengonfirmasi email kamu.", cBtn:"Konfirmasi email", cI:"Kalau kamu tidak mendaftar di HoldemMaster, abaikan email ini.", rT:"Atur ulang kata sandi", rB:"Ketuk tombol di bawah untuk membuat kata sandi baru.", rBtn:"Buat kata sandi baru", rI:"Kalau kamu tidak meminta kata sandi diatur ulang, abaikan email ini. Kata sandi kamu tidak akan berubah.", L:"Kalau tombolnya tidak berfungsi, tempel tautan ini di browser:" },
 ms: { cT:"Sahkan alamat e-mel anda", cB:"Untuk melengkapkan pendaftaran HoldemMaster, tekan butang di bawah untuk mengesahkan e-mel anda.", cBtn:"Sahkan e-mel", cI:"Jika anda tidak mendaftar di HoldemMaster, abaikan e-mel ini.", rT:"Tetapkan semula kata laluan", rB:"Tekan butang di bawah untuk menetapkan kata laluan baharu.", rBtn:"Tetapkan kata laluan baharu", rI:"Jika anda tidak meminta tetapan semula kata laluan, abaikan e-mel ini. Kata laluan anda tidak akan berubah.", L:"Jika butang tidak berfungsi, tampal pautan ini dalam pelayar anda:" },
 hi: { cT:"अपने ईमेल पते की पुष्टि करें", cB:"HoldemMaster पर साइन अप पूरा करने के लिए नीचे दिए बटन पर टैप करके अपने ईमेल पते की पुष्टि करें।", cBtn:"ईमेल की पुष्टि करें", cI:"अगर आपने HoldemMaster पर साइन अप नहीं किया है, तो इस ईमेल को अनदेखा करें।", rT:"पासवर्ड रीसेट करें", rB:"नया पासवर्ड सेट करने के लिए नीचे दिए बटन पर टैप करें।", rBtn:"नया पासवर्ड सेट करें", rI:"अगर आपने पासवर्ड रीसेट का अनुरोध नहीं किया है, तो इस ईमेल को अनदेखा करें। आपका पासवर्ड नहीं बदलेगा।", L:"अगर बटन काम न करे, तो यह लिंक अपने ब्राउज़र में पेस्ट करें:" },
 vi: { cT:"Xác nhận địa chỉ email", cB:"Để hoàn tất đăng ký HoldemMaster, hãy bấm nút bên dưới để xác nhận email của bạn.", cBtn:"Xác nhận email", cI:"Nếu bạn không đăng ký HoldemMaster, hãy bỏ qua email này.", rT:"Đặt lại mật khẩu", rB:"Bấm nút bên dưới để đặt mật khẩu mới.", rBtn:"Đặt mật khẩu mới", rI:"Nếu bạn không yêu cầu đặt lại mật khẩu, hãy bỏ qua email này. Mật khẩu của bạn sẽ không thay đổi.", L:"Nếu nút không hoạt động, hãy dán liên kết này vào trình duyệt:" },
 tr: { cT:"E-posta adresini onayla", cB:"HoldemMaster kaydını tamamlamak için aşağıdaki düğmeye dokunup e-posta adresini onayla.", cBtn:"E-postamı onayla", cI:"HoldemMaster'a kaydolmadıysan bu e-postayı yok sayabilirsin.", rT:"Şifreni sıfırla", rB:"Yeni şifre belirlemek için aşağıdaki düğmeye dokun.", rBtn:"Yeni şifre belirle", rI:"Şifre sıfırlama istemediysen bu e-postayı yok sayabilirsin. Şifren değişmeyecek.", L:"Düğme çalışmazsa bu bağlantıyı tarayıcına yapıştır:" },
 ar: { cT:"تأكيد البريد الإلكتروني", cB:"لإكمال التسجيل في HoldemMaster، يُرجى الضغط على الزر أدناه لتأكيد البريد الإلكتروني.", cBtn:"تأكيد البريد الإلكتروني", cI:"إذا لم يكن التسجيل في HoldemMaster بطلب منك، يمكن تجاهل هذه الرسالة.", rT:"إعادة تعيين كلمة المرور", rB:"يُرجى الضغط على الزر أدناه لتعيين كلمة مرور جديدة.", rBtn:"تعيين كلمة مرور جديدة", rI:"إذا لم يصدر منك طلب لإعادة تعيين كلمة المرور، يمكن تجاهل هذه الرسالة. لن تتغير كلمة المرور.", L:"إذا لم يعمل الزر، يُرجى لصق هذا الرابط في المتصفح:" },
 ru: { cT:"Подтверди адрес почты", cB:"Чтобы завершить регистрацию на HoldemMaster, нажми кнопку ниже и подтверди адрес почты.", cBtn:"Подтвердить почту", cI:"Если регистрация на HoldemMaster начата не тобой, просто проигнорируй это письмо.", rT:"Сброс пароля", rB:"Нажми кнопку ниже, чтобы задать новый пароль.", rBtn:"Задать новый пароль", rI:"Если запрос на сброс пароля поступил не от тебя, просто проигнорируй это письмо. Пароль не изменится.", L:"Если кнопка не работает, вставь эту ссылку в браузер:" },
};
const others = Object.keys(T).filter(k => k !== "ko");
// ★압축판(2026-10-14) — Supabase가 «too big»으로 거부했다(언어마다 HTML 통째 반복 = 본문 약 18KB · 제목 988자).
// HTML 틀은 한 번만 쓰고 언어별로 문구 변수만 바꾼다(Go text/template 변수 재대입 «=» · Go 1.11+).
const q = (v) => JSON.stringify(v);
const NAMES = ["lang", "dir", "title", "body", "btn", "ign", "link"];
const vars = (t, k, which) => {
  const [title, body, btn, ign] = which === "c" ? [t.cT, t.cB, t.cBtn, t.cI] : [t.rT, t.rB, t.rBtn, t.rI];
  return { lang: k, dir: k === "ar" ? "rtl" : "ltr", title, body, btn, ign, link: t.L };
};
const build = (which) => {
  const ko = vars(T.ko, "ko", which);
  let s = `{{ $l := or .Data.language "ko" }}` + NAMES.map(n => `{{ $${n} := ${q(ko[n])} }}`).join("") + "\n";
  others.forEach((k, i) => {
    const v = vars(T[k], k, which);
    s += `${i === 0 ? "{{ if" : "{{ else if"} eq $l ${q(k)} }}` + NAMES.map(n => `{{ $${n} = ${q(v[n])} }}`).join("") + "\n";
  });
  s += "{{ end }}\n";
  s += [
    `<div dir="{{ $dir }}" lang="{{ $lang }}" style="font-family:Arial,Helvetica,sans-serif;max-width:480px;margin:0 auto;padding:24px;color:#1f2937;line-height:1.6">`,
    `<p style="font-size:13px;font-weight:bold;color:#8a6d1d;margin:0 0 16px">HoldemMaster</p>`,
    `<h2 style="font-size:20px;margin:0 0 12px">{{ $title }}</h2>`,
    `<p style="margin:0 0 20px">{{ $body }}</p>`,
    `<p style="margin:0 0 24px"><a href="{{ .ConfirmationURL }}" style="display:inline-block;background:#1f2937;color:#ffffff;text-decoration:none;font-weight:bold;padding:12px 20px;border-radius:8px">{{ $btn }}</a></p>`,
    `<p style="font-size:13px;color:#6b7280;margin:0 0 8px">{{ $link }}</p>`,
    `<p dir="ltr" style="font-size:12px;color:#6b7280;word-break:break-all;margin:0 0 20px">{{ .ConfirmationURL }}</p>`,
    `<p style="font-size:13px;color:#6b7280;margin:0">{{ $ign }}</p>`,
    `</div>`,
  ].join("\n") + "\n";
  return s;
};
// 제목 = 언어 분기 없이 두 언어 병기(짧게 · 본문이 그 사람 언어로 나간다)
const SUBJ = { c: "HoldemMaster — 이메일 인증 / Confirm your email", r: "HoldemMaster — 비밀번호 재설정 / Reset your password" };
writeFileSync(`${OUT}/confirm-signup.html`, build("c"));
writeFileSync(`${OUT}/reset-password.html`, build("r"));
writeFileSync(`${OUT}/subjects.txt`, `[Confirm signup 제목]\n${SUBJ.c}\n\n[Reset password 제목]\n${SUBJ.r}\n`);
console.log("ok", Object.keys(T).length, "languages");
